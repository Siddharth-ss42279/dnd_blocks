import grapesjs from 'grapesjs';

export default grapesjs.plugins.add('gjs-blocks-basic', (editor, opts = {}) => {
  const config = {
    blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map', 'h1-block', 'h2-block', 'h3-block', 'h4-block', 'html-code'],
    flexGrid: 0,
    stylePrefix: 'gjs-',
    addBasicStyle: true,
    category: 'Basic',
    labelColumn1: '1 Column',
    labelColumn2: '2 Columns',
    labelColumn3: '3 Columns',
    labelColumn37: '2 Columns 3/7',
    labelText: 'Text',
    labelLink: 'Link',
    labelImage: 'Image',
    labelVideo: 'Video',
    labelMap: 'Map',
    labelHead1: 'Heading 1',
    labelHead2: 'Heading 2',
    labelHead3: 'Heading 3',
    labelHead4: 'Heading 4',
    labelHtml: 'html-code',
    ...opts
  };

  // Add blocks
  const loadBlocks = require('./blocks');
  loadBlocks.default(editor, config);

  //accordian style
  const categories = editor.BlockManager.getCategories();
  categories.each(category => {
  	category.set('open', false).on('change:open', opened => {
  		opened.get('open') && categories.each(category => {
              category !== opened && category.set('open', false)
          })
  	})
  });

});
