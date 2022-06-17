function DomElement(selectorBlock, heightBlock, widthBlock, bgBlock, fontSizeBlock) {
   this.selector = selectorBlock;
   this.height = heightBlock + 'px';
   this.width = widthBlock + 'px';
   this.bg = bgBlock;
   this.fontSize = fontSizeBlock + 'px';

   this.createElement = function () {
      if (this.selector[0] == '.') {

         let div = document.createElement('div');
         div.textContent = 'Это блок div';
         div.classList.add("block")
         document.body.append(div)

         div.style.cssText = `height: ${this.height};
         width: ${this.width};
         background: ${this.bg};
         font-size: ${this.fontSize};
       `;

      } else if (this.selector[0] == '#') {

         let p = document.createElement('p');
         p.textContent = 'Это блок p';
         p.id = 'best'
         document.body.append(p)

         p.style.cssText = `height: ${this.height};
         width: ${this.width};
         background: ${this.bg};
         font-size: ${this.fontSize};
       `;

      }
   }
}

const NewElement = new DomElement('.block', 100, 300, 'green', 30)

NewElement.createElement()