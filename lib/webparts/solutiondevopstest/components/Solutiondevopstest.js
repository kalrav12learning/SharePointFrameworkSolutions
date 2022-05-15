var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './Solutiondevopstest.module.scss';
var Solutiondevopstest = /** @class */ (function (_super) {
    __extends(Solutiondevopstest, _super);
    function Solutiondevopstest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Solutiondevopstest.prototype.render = function () {
        return (React.createElement("div", { className: styles.panelStyle },
            React.createElement("div", { className: styles.tableCaptionStyle }, "Welcome to Azure DevOps CI/CD for SPFX"),
            React.createElement("div", { className: styles.tableCaptionStyle }, "Customize SharePoint Experiences using WebParts !!!  ")));
    };
    return Solutiondevopstest;
}(React.Component));
export default Solutiondevopstest;
//# sourceMappingURL=Solutiondevopstest.js.map