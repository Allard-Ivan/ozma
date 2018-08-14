/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		'/',
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];
	// 以后再研究这两个
	config.cloudServices_tokenUrl = 'https://docs.ckeditor.com/ckeditor4/latest/api/CKEDITOR_config.html#cfg-cloudServices_tokenUrl';
	config.cloudServices_uploadUrl = 'https://your-organization-id.cke-cs.com/easyimage/upload/';

	config.removeButtons = 'Source,NewPage,Templates,Cut,Copy,Paste,PasteFromWord,PasteText,Undo,Redo,SelectAll,Form,HiddenField,ImageButton,Button,Select,Textarea,TextField,Radio,Checkbox,Outdent,Indent,CreateDiv,BidiLtr,BidiRtl,Language,ShowBlocks,About';
	config.removePlugins = 'elementspath,resize';
	config.language = 'zh-cn';
	config.uiColor = '#ffffff';
	config.toolbarCanCollapse = true;
};
