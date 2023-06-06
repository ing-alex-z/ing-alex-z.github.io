var ShadowCatcher = pc.createScript('shadowCatcher');

ShadowCatcher.attributes.add('material', { type:'asset' });
ShadowCatcher.attributes.add('intensity', { type: 'number', min: 0, max: 1, default: 1 });

ShadowCatcher.prototype.initialize = function() {
    // Attach a shader to a material that makes it appear transparent while still receiving shadows.
    const materialResource = this.material.resource || material;
    const shadowFragmentShader = `
        #ifdef GL2
        #define SHADOW_SAMPLERVS sampler2DShadow
        #else
        #define SHADOW_SAMPLERVS sampler2D
        #endif
        vec3 dEmissive;
        uniform float intensity;
        float getShadowPCF3x3(SHADOW_SAMPLERVS shadowMap, vec3 shadowCoord, vec3 shadowParams);
        vec4 getTransparentShadow() {
            float shadow = getShadowPCF3x3(light0_shadowMap, dShadowCoord, light0_shadowParams);
            float a = (1. - clamp(shadow + 0.5, 0., 1.)) * intensity;
            return vec4(-gl_FragColor.rgb, a);
        }

        void getEmission() {

        }
    `;

    const endShader = `
        gl_FragColor.rgb = combineColor(litShaderArgs.albedo, litShaderArgs.sheen.specularity, litShaderArgs.clearcoat.specularity);
        vec4 shadow = getTransparentShadow();
        gl_FragColor.rgb += shadow.rgb;
        litShaderArgs.opacity = shadow.a;

        gl_FragColor.rgb = addFog(gl_FragColor.rgb);

        #ifndef HDR
        gl_FragColor.rgb = toneMap(gl_FragColor.rgb);
        gl_FragColor.rgb = gammaCorrectOutput(gl_FragColor.rgb);
        #endif
    `;
      
    // We use emissive because it can overwrite color to be pure black.
    materialResource.setParameter('intensity', this.intensity);
    materialResource.chunks.APIVersion = pc.CHUNKAPI_1_57;
    materialResource.chunks.emissivePS = shadowFragmentShader;
    materialResource.chunks.endPS = endShader;
    materialResource.blendType = pc.BLEND_PREMULTIPLIED;
    materialResource.update();

    this.on('attr:intensity', function (value, prev) {
        materialResource.setParameter('intensity', value);
    });
};
