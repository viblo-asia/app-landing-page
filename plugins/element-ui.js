import Vue from 'vue';

import en from 'element-ui/lib/locale/lang/en';
import { use as useLocale } from 'element-ui/lib/locale';

import Container from 'element-ui/lib/container';
import Header from 'element-ui/lib/header';
import Main from 'element-ui/lib/main';
import Footer from 'element-ui/lib/footer';
import Row from 'element-ui/lib/row';
import Col from 'element-ui/lib/col';

import Menu from 'element-ui/lib/menu';
import MenuItem from 'element-ui/lib/menu-item';

import Button from 'element-ui/lib/button';
import Carousel from 'element-ui/lib/carousel';
import CarouselItem from 'element-ui/lib/carousel-item';

require('element-ui/lib/theme-chalk/base.css');
require('element-ui/lib/theme-chalk/icon.css');
require('element-ui/lib/theme-chalk/display.css');

require('element-ui/lib/theme-chalk/container.css');
require('element-ui/lib/theme-chalk/header.css');
require('element-ui/lib/theme-chalk/main.css');
require('element-ui/lib/theme-chalk/footer.css');
require('element-ui/lib/theme-chalk/row.css');
require('element-ui/lib/theme-chalk/col.css');
require('element-ui/lib/theme-chalk/menu.css');
require('element-ui/lib/theme-chalk/menu-item.css');
require('element-ui/lib/theme-chalk/button.css');

useLocale(en);

Vue.component('el-container', Container);
Vue.component('el-header', Header);
Vue.component('el-main', Main);
Vue.component('el-footer', Footer);
Vue.component('el-row', Row);
Vue.component('el-col', Col);
Vue.component('el-menu', Menu);
Vue.component('el-menu-item', MenuItem);
Vue.component('el-button', Button);
