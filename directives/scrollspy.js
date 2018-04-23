import _map from 'lodash/map';
import _findLast from 'lodash/findLast';

/** @param {Element} el */
const offsetTop = (el, viewportOffset) => el.getBoundingClientRect().top + viewportOffset;

const getCurrentScroll = (items, offset) => {
    const scroll = window.scrollY;
    return _findLast(items, item => scroll + offset > offsetTop(item, scroll));
};

/** @param {Array} items */
const onScroll = (items, { offset, name }, vnode) => () => {
    const currentItem = getCurrentScroll(items, offset);

    if (currentItem) {
        vnode.context.$data[name] = currentItem.id;
    }
};

/** @param {Element} el */
const scrollspy = (el, { value }, vnode) => {
    if (typeof value !== 'object') return;

    const items = _map(value.items, id => document.getElementById(id));
    const listener = onScroll(items, value, vnode);

    el.$_scrollspy = { listener };
    window.addEventListener('scroll', listener);
};

const unbindListener = (el) => {
    if (el.$_scrollspy) {
        window.removeEventListener('scroll', el.$_scrollspy.listener);
        el.$_scrollspy = null;
    }
};

export default {
    inserted: scrollspy,

    update: (el, bindings, vnode) => {
        const { value, oldValue } = bindings;
        if (value.items !== oldValue.items) {
            unbindListener(el);
            scrollspy(el, bindings, vnode);
        }
    },

    unbind: unbindListener
};
