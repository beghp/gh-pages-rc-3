webpackJsonp([0xaeaa9a42a6fd],{339:function(n,e){n.exports={data:{markdownRemark:{html:'<h2 id="dots"><a href="#dots" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dots</h2>\n<p>Dots are separate component which you can use with controlled carousel as well.</p>\n\n  <div>\n    <div class="gatsby-render-code" ></div>\n    <div class="gatsby-render-source-code" style="display:none;">\n    class MyCarousel extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      value: 0,\n      slides: [\n        (&lt;img src={imageOne} /&gt;),\n        (&lt;img src={imageTwo} /&gt;),\n        (&lt;img src={imageThree} /&gt;),\n      ],\n    }\n    this.onchange = this.onchange.bind(this);\n  }\n\n\n  onchange(value) {\n    this.setState({ value });\n  }\n\n  render() {\n    return (\n    &lt;div&gt;\n      &lt;Carousel\n        value={this.state.value}\n        slides={this.state.slides}\n        onChange={this.onchange}\n      /&gt;\n      &lt;Dots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} /&gt;\n    &lt;/div&gt;\n    );\n  }\n}\n    </div>\n  </div>'}},pathContext:{relativePath:"GDK>../docs/examples/dots.md"}}}});
//# sourceMappingURL=path---docs-examples-dots-02ca8f84e1a9c02225f1.js.map