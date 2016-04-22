(function () {
    var sq1Gen = function (id, size) {
        return new imgGenerator(id, size);
    };

    var oneUnitAngle = Math.PI / 6;
    var cornerRatio = (Math.sqrt(3) + 1) / 2;
    var imgGenerator = function (id, size) {
        var c = document.getElementById(id);
        var ctx = c.getContext("2d");

        var halfSize = size / 2;
        var topCenter = [halfSize, halfSize];
        var bottomCenter = [halfSize + size, halfSize];
        var radius = 0.6 * halfSize;
        ctx.lineWidth = size / 50;

        this.drawDoubleShape = function (top, bottom) {
            this.drawShape(topCenter, top);
            this.drawShape(bottomCenter, bottom);
        }
        /**
         * [drawShape description]
         * @param  {[x, y]} center
         *         the coordinate of the center of the shape
         * @param  {string} shape 
         *         a sequence of 'e' and 'c' representing edge or corners
         */
        this.drawShape = function (center, shape) {
            ctx.save()
            ctx.translate(center[0], center[1]);
            angle = 0;
            ctx.strokeStyle = "black";
            for (var i = 0; i < shape.length; i++) {
                var piece = shape[i];
                angle = drawPiece(center, angle, piece);
            }
            drawShapeFlipLine(center);
            ctx.restore();
        }

        var drawPiece = function (center, angle, piece) {
            ctx.moveTo(0, 0);
            ctx.beginPath();
            ctx.lineTo(Math.sin(angle) * radius, -Math.cos(angle) * radius);
            angle += oneUnitAngle;
            switch (piece) {
                case 'e':
                    ctx.lineTo(Math.sin(angle) * radius, -Math.cos(angle) * radius);
                    break;
                case 'c':
                    ctx.lineTo(Math.sin(angle) * radius * cornerRatio, -Math.cos(angle) * radius * cornerRatio);
                    angle += oneUnitAngle;
                    ctx.lineTo(Math.sin(angle) * radius, -Math.cos(angle) * radius);
                    break;                    
            }
            ctx.lineTo(0, 0);
            ctx.stroke();
            return angle;
        }

        var drawShapeFlipLine = function (center) {
            ctx.beginPath();
            ctx.moveTo(0, - radius);
            ctx.lineTo(0, radius);
            ctx.strokeStyle = "red";
            ctx.stroke();
        }
    };
 
    if(!window.sq1Gen) {
        window.sq1Gen = sq1Gen;
    }
})();