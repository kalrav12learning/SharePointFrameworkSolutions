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
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField, PropertyPaneCheckbox, PropertyPaneDropdown, PropertyPaneToggle } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'SolutiondevopstestWebPartStrings';
import Solutiondevopstest from './components/Solutiondevopstest';
var SolutiondevopstestWebPart = /** @class */ (function (_super) {
    __extends(SolutiondevopstestWebPart, _super);
    function SolutiondevopstestWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SolutiondevopstestWebPart.prototype.render = function () {
        var element = React.createElement(Solutiondevopstest, {
            description: this.properties.description,
            test: this.properties.test,
            test1: this.properties.test1,
            test2: this.properties.test2,
            test3: this.properties.test3
        });
        ReactDom.render(element, this.domElement);
    };
    SolutiondevopstestWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(SolutiondevopstestWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SolutiondevopstestWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: 'Description'
                                }),
                                PropertyPaneTextField('test', {
                                    label: 'Multi-line Text Field',
                                    multiline: true
                                }),
                                PropertyPaneCheckbox('test1', {
                                    text: 'Checkbox'
                                }),
                                PropertyPaneDropdown('test2', {
                                    label: 'Dropdown',
                                    options: [
                                        { key: '1', text: 'One' },
                                        { key: '2', text: 'Two' },
                                        { key: '3', text: 'Three' },
                                        { key: '4', text: 'Four' }
                                    ]
                                }),
                                PropertyPaneToggle('test3', {
                                    label: 'Toggle',
                                    onText: 'On',
                                    offText: 'Off'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return SolutiondevopstestWebPart;
}(BaseClientSideWebPart));
export default SolutiondevopstestWebPart;
//# sourceMappingURL=SolutiondevopstestWebPart.js.map