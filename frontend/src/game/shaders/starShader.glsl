
precision mediump float;

uniform float time;
uniform vec2 resolution;

// 2D rotation matrix
mat2 rot(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
}

float star(vec2 uv, float flare) {
    float d = length(uv);
    float m = .015/d;

    // create horizontal and vertical rays
    float rays = max(0., 1.-abs(uv.x * uv.y * 5000.));
    m += rays * flare;

    // rotate the rays by 45 degrees
    uv*=rot(3.1415*0.25);
    rays = max(0., 1.-abs(uv.x * uv.y * 5000.));
    m += rays*.3 * flare;

    return m;
}

// pseudo random generator to take two numbers into one
float hash21(vec2 p) {
    p = fract(p*vec2(123.34, 456.21));
    p += dot(p, p+45.32);
    return fract(p.x*p.y);
}

void main() {
    vec2 uv = (gl_FragCoord.xy -.5*resolution.xy)/resolution.y;
    uv *= 5.;
    vec3 col = vec3(0);

    // create a grid uv and an id for each box
    vec2 gv = fract(uv)-.5;
    vec2 id = floor(uv);
    float n = hash21(id); // random between 0 and 1

    col += star(gv-vec2(n, fract(n*34.))+.5, 1.);

    // debugging the grid
    if(gv.x > .48 || gv.y > .48) col.r = 1.;
    gl_FragColor = vec4(col, 1.0);
}