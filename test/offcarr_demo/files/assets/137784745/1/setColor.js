var SetColor = pc.createScript('setColor');
SetColor.attributes.add('tag', {type: 'string', 'default': 'anodized', title: 'Material Tag'});

// initialize code called once per entity
SetColor.prototype.initialize = function() {
    this.app.on('setcolor', function (color) {
        var mats = this.app.assets.findByTag(this.tag);

        for (i = 0; i < mats.length; i++) {
            var material = mats[i].resource;
            material.ambient = color;
            material.diffuse = color;
            material.update();
        }
    }, this);    
};