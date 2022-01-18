export class CommonLocators {

    _addEntityAPI = ".datasources .t--entity-add-btn"
    _integrationCreateNew = "[data-cy=t--tab-CREATE_NEW]"
    _loading = "#loading"
    _queryName = ".t--action-name-edit-field span"
    _queryNameTxt = ".t--action-name-edit-field input"
    _entityNameInExplorer = (entityNameinLeftSidebar: string) => "//div[contains(@class, 't--entity-name')][text()='" + entityNameinLeftSidebar + "']"
    _saveStatusSuccess = ".t--save-status-success"
    _codeMirrorTextArea = ".CodeMirror textarea"
    _codeMirrorCode = ".CodeMirror-code"
    _codeEditorTargetTextArea = ".CodeEditorTarget textarea"
    _entityExplorersearch = "#entity-explorer-search"
    _propertyControl = ".t--property-control-"
    _textWidget = ".t--draggable-textwidget span"
    _inputWidget = ".t--draggable-inputwidgetv2 input"
    _publishButton = ".t--application-publish-btn"
    _textWidgetInDeployed = ".t--widget-textwidget span"
    _inputWidgetInDeployed = ".t--widget-inputwidgetv2 input"
    _backToEditor = ".t--back-to-editor"
    _expandCollapseArrow = (entityNameinLeftSidebar: string) => "//div[text()='" + entityNameinLeftSidebar + "']/ancestor::div/preceding-sibling::a[contains(@class, 't--entity-collapse-toggle')]"
    _entityProperties = (entityNameinLeftSidebar: string) => "//div[text()='" + entityNameinLeftSidebar + "']/ancestor::div[contains(@class, 't--entity-item')]/following-sibling::div//div[contains(@class, 't--entity-property')]//code"
    _contextMenu = (entityNameinLeftSidebar: string) => "//div[text()='" + entityNameinLeftSidebar + "']/ancestor::div[contains(@class, 't--entity')]//span[contains(@class, 'entity-context-menu')]//div"
    _contextMenuItem = (item: string) => "//div[text()='" + item + "']/parent::a[contains(@class, 'single-select')]"
    _newPage = ".pages .t--entity-add-btn"
    _entityNameEditing = (entityNameinLeftSidebar: string) => "//span[text()='" + entityNameinLeftSidebar + "']/parent::div[contains(@class, 't--entity-name editing')]/input"
    _toastMsg = ".t--toast-action"
    _jsToggle = (controlToToggle: string) => ".t--property-control-" + controlToToggle + " .t--js-toggle"
    _spanButton = (btnVisibleText: string) => "//span[text()='" + btnVisibleText + "']/parent::button"
    _empty = "span[name='no-response']"
    _selectDropdown = (ddName: string) => "//div[contains(@class, 't--property-control-" + ddName + "')]//button"
    _dropDownValue = (ddOption: string) => ".single-select:contains('" + ddOption + "')"
    _actionTextArea = (actionName: string) => "//label[text()='" + actionName + "']/following-sibling::div//div[contains(@class, 'CodeMirror')]//textarea"
    _existingDefaultTextInput = ".t--property-control-defaulttext .CodeMirror-code"
    _openWidget=  ".widgets .t--entity-add-btn"            
    _widgetPageIcon = (widgetType: string) => `.t--widget-card-draggable-${widgetType}`
    _dropHere= "#canvas-dragging-0"
    _widgetInCanvas=  (widgetType: string) => `.t--draggable-${widgetType}`
    _widgetInDeployed =  (widgetType: string) => `.t--widget-${widgetType}`
    _propertyToggle = (controlToToggle: string) => ".t--property-control-" + controlToToggle + " input[type='checkbox']"
    _openNavigationTab = (tabToOpen: string) =>  `#switcher--${tabToOpen}`

}