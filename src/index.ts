import { buildCustomElementConstructor } from 'lwc';
import UiApp from 'ui/app';

customElements.define('ui-app', buildCustomElementConstructor(UiApp));
