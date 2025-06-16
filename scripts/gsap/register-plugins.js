// Import GSAP core
import gsap from './gsap.min.js';

// Import and register plugins
import Draggable from './Draggable.min.js';
import DrawSVGPlugin from './DrawSVGPlugin.min.js';
import EaselPlugin from './EaselPlugin.min.js';
import Flip from './Flip.min.js';
import GSDevTools from './GSDevTools.min.js';
import InertiaPlugin from './InertiaPlugin.min.js';
import MotionPathHelper from './MotionPathHelper.min.js';
import MotionPathPlugin from './MotionPathPlugin.min.js';
import MorphSVGPlugin from './MorphSVGPlugin.min.js';
import Observer from './Observer.min.js';
import Physics2DPlugin from './Physics2DPlugin.min.js';
import PhysicsPropsPlugin from './PhysicsPropsPlugin.min.js';
import PixiPlugin from './PixiPlugin.min.js';
import ScrambleTextPlugin from './ScrambleTextPlugin.min.js';
import ScrollTrigger from './ScrollTrigger.min.js';
import ScrollSmoother from './ScrollSmoother.min.js';
import ScrollToPlugin from './ScrollToPlugin.min.js';
import SplitText from './SplitText.min.js';
import TextPlugin from './TextPlugin.min.js';
import EasePack from './EasePack.min.js';
import CustomEase from './CustomEase.min.js';
import CustomBounce from './CustomBounce.min.js';
import CustomWiggle from './CustomWiggle.min.js';

// Register plugins
gsap.registerPlugin(
    Draggable,
    DrawSVGPlugin,
    EaselPlugin,
    Flip,
    GSDevTools,
    InertiaPlugin,
    MotionPathHelper,
    MotionPathPlugin,
    MorphSVGPlugin,
    Observer,
    Physics2DPlugin,
    PhysicsPropsPlugin,
    PixiPlugin,
    ScrambleTextPlugin,
    ScrollTrigger,
    ScrollSmoother,
    ScrollToPlugin,
    SplitText,
    TextPlugin,
    EasePack,
    CustomEase,
    CustomBounce,
    CustomWiggle
);

export default gsap;