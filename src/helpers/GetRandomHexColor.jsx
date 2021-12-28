 function GetRandomHexColor() {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    if(color !== '#ffffff') {
        return color;
    } else {
        return '#ffffb0';
    }
}

export default GetRandomHexColor;