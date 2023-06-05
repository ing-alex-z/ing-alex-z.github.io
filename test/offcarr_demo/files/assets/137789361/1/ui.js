var UI = pc.createScript('ui');

var buttonSize = '30px';

var colors = [
    {        
        color: new pc.Color(255.0/255.0, 131.0/255.0, 0/255.0),
        hex: "#ff8300"
        // arancione
    },
    {        
        color: new pc.Color(82.0/255.0, 176.0/255.0, 0/255.0),
        hex: "#52b000"
        // verde
    },
    {        
        color: new pc.Color(0/255.0, 191.0/255.0, 255/255.0),
        hex: "#00bfff"
        // azzurro
    },
    {        
        color: new pc.Color(162.0/255.0, 24.0/255.0, 24.0/255.0),
        hex: "#a21818"
        // rosso
    },
        {        
        color: new pc.Color(159.0/255.0, 0/255.0, 255/255.0),
        hex: "#9f00ff"
        // viola
    },
        {        
        color: new pc.Color(192.0/255.0, 192.0/255.0, 192.0/255.0),
        hex: "#c0c0c0"
        // argento
    },
        {        
        color: new pc.Color(0/255.0, 0/255.0, 0/255.0),
        hex: "#000000"
        // nero
    }
];

var framecolors = [
    {        
        color: new pc.Color(255.0/255.0, 131.0/255.0, 0/255.0),
        hex: "#ff8300"
        // arancione
    },
    {        
        color: new pc.Color(82.0/255.0, 176.0/255.0, 0/255.0),
        hex: "#52b000"
        // verde
    },
    {        
        color: new pc.Color(0/255.0, 191.0/255.0, 255/255.0),
        hex: "#00bfff"
        // azzurro
    },
    {        
        color: new pc.Color(162.0/255.0, 24.0/255.0, 24.0/255.0),
        hex: "#a21818"
        // rosso
    },
        {        
        color: new pc.Color(159.0/255.0, 0/255.0, 255/255.0),
        hex: "#9f00ff"
        // viola
    },
        {        
        color: new pc.Color(192.0/255.0, 192.0/255.0, 192.0/255.0),
        hex: "#c0c0c0"
        // argento
    },
        {        
        color: new pc.Color(0/255.0, 0/255.0, 0/255.0),
        hex: "#000000"
        // nero
    }
];



// initialize code called once per entity
UI.prototype.initialize = function() {
    var app = this.app;

    // INIZIO ANODIZZATI

    this.palette = document.createElement('div');
    this.palette.style.borderRadius = '1px';
    this.palette.style.backgroundColor = 'rgba(0,0,0,0.7)';
    this.palette.style.padding = '10px';
    this.palette.style.position = 'absolute';
    this.palette.style.left = '5%';
    this.palette.style.bottom = '0px';
    this.palette.style.transform = 'translateX(-5%)';
    this.palette.style.margin = '10px';
    this.palette.style.maxWidth = '80vw';

    document.body.appendChild(this.palette);


        {
        var button = document.createElement('div');
        button.style.cssFloat = 'left';
        button.style.marginLeft = '5px';
        button.style.marginRight = '40px';
        button.style.marginTop = '8px';
        button.style.width = 300;
        button.style.color = 'rgba(255,255,255,1)';
        button.style.backgroundPosition = 'center';
        button.style.backgroundRepeat = 'no-repeat';
        button.style.cursor = 'none';
                
        const newContent = document.createTextNode("Anodization color");

        // add the text node to the newly created div
        button.appendChild(newContent);

        this.palette.appendChild(button);
    }



    for (var i = 0; i < colors.length; i++) {
        var color = document.createElement('div');
        color.style.cssFloat = 'left';
        color.style.marginRight = '10px';
        
        this.palette.appendChild(color);

        var clickable = document.createElement('a');
        clickable.setAttribute('href', 'javascript:void(0)');
        clickable.onclick = (function() {
            var index = i;
            return function() { 
                app.fire('setColor', colors[index].color);
            };
        })();
        color.appendChild(clickable);

        var image = document.createElement('div');
        image.style.backgroundColor = colors[i].hex;
        image.style.width = buttonSize;
        image.style.height = buttonSize;
        image.style.borderRadius = '1px';
        image.style.overflow = 'hidden';
        clickable.appendChild(image);

        var grad = document.createElement('div');
        grad.style.background = 'linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5438550420168067) 49%, rgba(255,255,255,0.25253851540616246) 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.7) 100%)';
        grad.style.width = '100%';
        grad.style.height = '100%';

        image.appendChild(grad);        
    }

    // FINE ANODIZZATI

    // INIZIO TELAIO

        this.palette = document.createElement('div');
    this.palette.style.borderRadius = '1px';
    this.palette.style.backgroundColor = 'rgba(0,0,0,0.7)';
    this.palette.style.padding = '10px';
    this.palette.style.position = 'absolute';
    this.palette.style.left = '5%';
    this.palette.style.bottom = '60px';
    this.palette.style.transform = 'translateX(-5%)';
    this.palette.style.margin = '10px';

    document.body.appendChild(this.palette);


        {
        var button = document.createElement('div');
        button.style.cssFloat = 'left';
        button.style.marginLeft = '15px';
        button.style.marginRight = '40px';
        button.style.marginTop = '8px';
        button.style.width = 300;
        button.style.color = 'rgba(255,255,255,1)';
        button.style.backgroundPosition = 'center';
        button.style.backgroundRepeat = 'no-repeat';
        button.style.cursor = 'none';
                
        const newContent = document.createTextNode("Frame color");

        // add the text node to the newly created div
        button.appendChild(newContent);

        this.palette.appendChild(button);
    }



    for (var i = 0; i < framecolors.length; i++) {
        var color = document.createElement('div');
        color.style.cssFloat = 'left';
        color.style.marginRight = '10px';
        
        this.palette.appendChild(color);

        var clickable = document.createElement('a');
        clickable.setAttribute('href', 'javascript:void(0)');
        clickable.onclick = (function() {
            var index = i;
            return function() { 
                app.fire('setColorFrame', framecolors[index].color);
            };
        })();
        color.appendChild(clickable);

        var image = document.createElement('div');
        image.style.backgroundColor = framecolors[i].hex;
        image.style.width = buttonSize;
        image.style.height = buttonSize;
        image.style.borderRadius = '1px';
        image.style.overflow = 'hidden';
        clickable.appendChild(image);

        // var grad = document.createElement('div');
        // grad.style.background = 'linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5438550420168067) 49%, rgba(255,255,255,0.25253851540616246) 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.7) 100%)';
        // grad.style.width = '100%';
        // grad.style.height = '100%';

        // image.appendChild(grad);        
    }

    // FINE TELAIO


    
    app.fire('setColor', colors[0].color);
    app.fire('setColorFrame', framecolors[0].color);
    // app.fire(buttons[1].action, buttons[1].tag);
};

// update code called every frame
UI.prototype.setVisibility = function(visible) {
    this.palette.style.visibility = visible ? 'visible' : 'hidden'; 
};
