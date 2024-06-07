#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;
#define NUM_LAYERS 20.

// 2D rotation matrix
mat2 rot(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
}

float rays(vec2 uv, float flare) {
    float rays = 0.;
    // create horizontal and vertical rays
    float cross = max(0., 1.-abs(uv.x * uv.y * 500.));
    rays += cross * flare;

    // rotate the rays by 45 degrees
    uv*=rot(3.1415*0.25);
    float diagonal = max(0., 1.-abs(uv.x * uv.y * 500.));
    rays += diagonal*.1 * flare;
    return rays;
}

float star(vec2 uv, float flare) {
    float d = length(uv);
    float m = .014/d;

    m += rays(uv, flare);

    // soften the glow
    m *= smoothstep(1., .2, d);
    return m;
}

// pseudo random generator to take two numbers into one
float hash21(vec2 p) {
    p = fract(p*vec2(123.34, 456.21));
    p += dot(p, p+45.32);
    return fract(p.x*p.y);
}

vec3 starLayer(vec2 uv) {
    vec3 col = vec3(0);

    // create a grid uv and an id for each box
    vec2 gv = fract(uv)-.5;
    vec2 id = floor(uv);
    for(int y=-1; y<=1; y++)
    {
        for(int x=-1;x<=1;x++) {
            vec2 offs = vec2(x, y);

            // add contributions from neighbours
            float n = hash21(id+offs);
            float size = fract(n*345.42);
            float star = star(gv-offs-vec2(n, fract(n*34.))+.5, smoothstep(.9, 1., size) * .1);

            // add a random colour to the star
            vec3 color = sin(vec3(.2, .3, .9)*fract(n*2345.2)*123.2)*.5+.5;
            color = color*vec3(.2,.25,1.+size)+vec3(.1, .1, .2)*2.; // adjust the colours for the star

            // add a sparkle to the star
            star *= sin(time * 3. + n*123.2) * .2 + 1.;

            col += star * size * color;
        }
    }
    return col;
}

void main() {
    vec2 uv = (gl_FragCoord.xy - resolution.xy)/resolution.y;
    float t = time * .001;

    // add a rotation to the uv
    uv *= rot(t);

    vec3 col = vec3(0);
    for(float i=0.; i<1.; i+=1./NUM_LAYERS) {
        // adjust the depth by the time
        float depth = fract(i+t);
        float scale = mix(20., .5, depth);
        float fade = depth * smoothstep(1., .9, depth);
        col += starLayer(uv * scale + i*453.2) * fade;
    }
    gl_FragColor = vec4(col, 1.0);
}