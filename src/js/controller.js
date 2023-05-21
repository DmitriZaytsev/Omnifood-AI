import dragDropView from './views/dragDropFeatureView.js';
import smoothScrollView from './views/smoothScrollView.js';
import mobileNavView from './views/mobileNavView.js';
import flexboxSupportView from './views/flexboxSupportView.js';
import stickyNavView from './views/stickyNavView.js';

import '../css/style.css';
import '../css/queries.css';
import '../css/general.css';


///////////////////////////////////////////////////////////
// Fixing flexbox gap property in unsupported browsers and versions
flexboxSupportView.fixFlexGap();

// ///////////////////////////////////////////////////////////
// Sticky navigation
stickyNavView.addStickyNav();

// ///////////////////////////////////////////////////////////
// Smooth scrolling animation
smoothScrollView.activateSmoothScroll();

// ///////////////////////////////////////////////////////////
// Make mobile navigation work
mobileNavView.addHandlerMobileNav();

// ///////////////////////////////////////////////////////////////////////////////////////////
///Show, drag, drop and remove widgets
dragDropView.cancelDefaultBehavior();
dragDropView.addHandlerOpenWIdget();
dragDropView.addHandlerMouseEvents();

