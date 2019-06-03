varying vec4 v_fragmentColor;
varying vec2 v_texCoord;


float rand(vec2 co)
{
    return fract(sin(dot(co.xy ,vec2(92.,80.))) +
                 cos(dot(co.xy ,vec2(41.,62.))) * 5.1);
}

void main()
{
    //vec4 v_orColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);
    //float gray = dot( v_orColor.rgb, vec3(0.299, 0.587, 0.114) );
    //gl_FragColor = vec4( gray, gray, gray, v_orColor.a);

        vec2 rnd = vec2(0.0);
        rnd = vec2(rand(v_texCoord),rand(v_texCoord));
        gl_FragColor = texture2D(CC_Texture0, v_texCoord+rnd*0.05);
}