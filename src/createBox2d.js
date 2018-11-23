export default ({
    width,
    height,
    vertex
}) => {
    let pNode = document.getElementById('canvas');
    if (!pNode) {
        pNode = document.createElement('canvas');
        canvas.id = 'canvas';
        document.body.appendChild(canvas);
    }
    pNode.style.width = width + 'px';
    pNode.style.height = height + 'px';
    pNode.width = width;
    pNode.height = height;
    pNode.style.border = `1px solid #fc0`;
    const ctx = pNode.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "#69c"; // 红色路径
    ctx.moveTo(...vertex[0]);
    ctx.lineTo(...vertex[1]);
    ctx.lineTo(...vertex[2]);
    ctx.lineTo(...vertex[3]);
    ctx.closePath();
    ctx.stroke();
}