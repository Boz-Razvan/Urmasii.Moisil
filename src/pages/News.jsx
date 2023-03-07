import React from 'react';
import { 
  Footer,
  BgNews
} from '../components';
import './styles/News.css';
import article1Image from './NewsContent/img.kids.comp.jpg';
import article2Image from './NewsContent/Sepi_logo_XBJVm5fIV6.webp';

const News = () => {
  return (
    <div className="Page">
              <BgNews />
      <div className='divider1' />
      <main>
        <div className="newsArticle">
          <img src={article1Image} alt="Article 1 Image" />
          <h2 className="articleTitle">Lorem ipsum dolor sit amet</h2>
          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque et porttitor purus. Sed volutpat, ligula non eleifend semper, diam lorem sagittis ligula, in consequat quam velit vitae ligula. Quisque eget congue ante, a ultricies neque. Donec blandit diam libero, vitae dictum purus feugiat a. Ut suscipit ante est. Etiam commodo lacinia felis. Suspendisse potenti.</p>
        </div>
        <div className="newsArticle">
          <img src={article2Image} alt="Article 2 Image" />
          <h2 className="articleTitle">Lorem ipsum dolor sit amet</h2>
          <p>Vestibulum nec turpis tempor, porta elit quis, maximus mauris. Phasellus fermentum, diam quis porta tincidunt, nunc mauris imperdiet est, nec hendrerit felis risus ac nunc. Pellentesque id varius libero, vel interdum lorem. Maecenas vitae urna magna. Vestibulum vel lobortis dolor. Pellentesque gravida molestie lectus id laoreet. Maecenas ex est, dictum at metus quis, rutrum vestibulum enim. Praesent sed sagittis tortor. Aliquam erat volutpat. Ut vel quam velit. In non ex eget nisi euismod blandit. Etiam fringilla quis ipsum ullamcorper euismod. Praesent mollis orci commodo eros malesuada, eu pulvinar dui tincidunt. Duis auctor at ligula eu sodales. Phasellus ut nisl feugiat, aliquam nulla eu, lacinia ex. Suspendisse rhoncus suscipit arcu, at dignissim sem ullamcorper non.</p>
        </div>
        <div className="newsArticle">
          <img src={article2Image} alt="Article 2 Image" />
          <h2 className="articleTitle">Lorem ipsum dolor sit amet</h2>
          <p>Maecenas vestibulum lobortis placerat. Etiam placerat, nibh vel vestibulum vehicula, magna libero vehicula nulla, vel viverra odio leo non justo. Pellentesque dui ipsum, tempor quis finibus eget, convallis ut magna. In id turpis porta, pharetra nisl eu, finibus est. Vestibulum commodo mauris eget eros vehicula congue. Fusce turpis sem, dictum in odio eu, pellentesque finibus odio. Duis elementum lacus orci, in ultricies mauris fringilla nec. Duis feugiat vulputate pharetra. Mauris tristique orci id semper blandit. Integer vitae ligula eget quam aliquam congue. Quisque turpis quam, dapibus at ex ac, auctor tempus nulla. Aenean magna turpis, ullamcorper pharetra cursus id, mattis eget libero.</p>
        </div>
        <div className="newsArticle">
          <img src={article1Image} alt="Article 1 Image" />
          <h2 className="articleTitle">Lorem ipsum dolor sit amet</h2>
          <p>In vitae enim iaculis, laoreet tellus non, vulputate risus. Morbi sit amet magna vitae felis vulputate ullamcorper sit amet at dui. Cras sapien lectus, condimentum at ornare id, scelerisque quis urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a hendrerit eros, consequat euismod odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum libero lorem, imperdiet nec posuere quis, sollicitudin a arcu. Ut imperdiet, purus non volutpat facilisis, augue lectus ornare neque, at convallis urna massa quis felis. Curabitur euismod massa id dignissim convallis.</p>
        </div>
        <div className="newsArticle">
          <img src={article1Image} alt="Article 1 Image" />
          <h2 className="articleTitle">Lorem ipsum dolor sit amet</h2>
          <p>Proin nec sollicitudin dolor. Donec et leo ut risus lobortis malesuada eget gravida diam. Praesent hendrerit, lectus sit amet ornare fringilla, nibh urna posuere arcu, vel facilisis arcu felis non metus. Nulla ut diam viverra, faucibus tortor nec, facilisis dui. Pellentesque massa augue, malesuada vel leo in, pharetra fermentum lacus. Mauris sed massa iaculis, imperdiet dui sed, ornare mi. Vivamus tempor, odio sed mattis sodales, ex libero vestibulum tellus, id finibus sapien augue non magna. Proin accumsan leo id euismod rhoncus. Vestibulum finibus, ex sit amet tempus euismod, erat orci faucibus mi, sed tincidunt felis turpis ut lorem. Morbi augue lacus, pellentesque sed erat at, sagittis euismod elit.</p>
        </div>
        <div className="newsArticle">
          <img src={article2Image} alt="Article 2 Image" />
          <h2 className="articleTitle">Lorem ipsum dolor sit amet</h2>
          <p>Maecenas consequat augue eu nisl consectetur bibendum. Maecenas a libero ac turpis malesuada porta. Ut finibus a leo non euismod. Mauris ultricies interdum justo, finibus pulvinar justo. Proin lectus ipsum, facilisis in hendrerit vel, bibendum ut massa. Sed semper cursus vestibulum. Etiam ut aliquam ipsum. Quisque aliquam nulla ac sem porttitor sagittis. Nulla vulputate pretium bibendum. Sed eget lobortis massa. Morbi bibendum magna sit amet auctor varius. Pellentesque scelerisque tempus pellentesque. Integer at accumsan tortor, vulputate elementum nisi.</p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
      <Footer />
    </div>
  );
};

export default News;
