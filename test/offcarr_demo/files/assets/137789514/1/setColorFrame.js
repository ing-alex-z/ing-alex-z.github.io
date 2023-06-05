var SetColorFrame = pc.createScript('setColorFrame');
SetColorFrame.attributes.add('tag', {type: 'string', 'default': 'titanium', title: 'Material Tag'});

// initialize code called once per entity
SetColorFrame.prototype.initialize = function() {
    this.app.on('setColorFrame', function (color) {
        var mats = this.app.assets.findByTag(this.tag);

        for (i = 0; i < mats.length; i++) {
            var material = mats[i].resource;
            material.ambient = color;
            material.diffuse = color;
            material.update();
        }
    }, this);    
};