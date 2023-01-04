export const getTransfromXValue = element => {
    const style = window.getComputedStyle(element)
    const matrix = new WebKitCSSMatrix(style.transform)

    return 'translateX: ', matrix.m41
}