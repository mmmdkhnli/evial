/** Dispatch event on click outside of node */
export const clickOutside = node => {
    const handleClick = event => {
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            node.dispatchEvent(
                new CustomEvent('click_outside', node)
            )
        }
    }

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    }
}

/** Serialize form */
export const serializeForm = form => {
    const formData = new FormData(form)

    let obj = {}

    for (let key of formData.keys()) {
        obj[key] = formData.get(key)
    }

    return obj
}