#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform float time;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    vec2 st = gl_FragCoord.xy / resolution.xy;
    st.x *= resolution.x / resolution.y; // maintain aspect ratio

    vec3 color = vec3(0.0);
    float brightness = random(st);

    // Adjust this threshold to control star density
    if (brightness > 0.95) {
        // Draw larger points for stars
        gl_PointSize = 2.0; // Adjust this value for star size
        color = vec3(1.0); // star color (white)
    }

    gl_FragColor = vec4(color, 1.0);
}
