const IncludeStyle = () => {
    return (
        <div>
            styled
            <style>{`

.sl-markdown-content > main > hr:not(:where(.not-content *)) {
  border: none !important;
  border-bottom: 4px double white !important;
  margin-bottom: 14px;
}
 
.sl-markdown-content div.ec-line {
margin-top: 0 !important;
font-size:10px;
}
.sl-markdown-content{
 font-size:15px;
}

.sl-markdown-content p,table,div.expressive-code {
 padding:0em;
 margin-top: 0em !important;
 margin-left: 1em !important;
}

.sl-markdown-content p {
 text-indent: 1em;
}
.sl-markdown-content li p {
  text-indent: 0;
  margin-left:0 !important;
}

.sl-markdown-content ul,ol,li::marker {
 padding-left:2em;
 margin-top: 0em !important;
 margin-left: 1em !important;
}


.sl-markdown-content h3::before {
content: "> ";
} 
.sl-markdown-content h4::before {
content: ">> ";
} 
.sl-markdown-content h5::before {
content: ">>> ";
} 
.sl-markdown-content h6::before {
content: ">>>> ";
} 

h1,h2,h3,h4,h5,h6 {
 margin-top: 1em !important;

}

figure pre {
 margin-top: 0.4em !important;
}
.sl-markdown-content h1 {
 font-size:27px;
 text-decoration: underline;
 font-weight: bold
}

.sl-markdown-content h2 {
 font-size:26px;
 font-weight: normal;
 text-decoration: underline;
}

.sl-markdown-content h3 {
 font-size:24px;
 font-weight: normal;
 font-style: italic;
 text-decoration: underline;
}

.sl-markdown-content h4 {
 font-size:22px;
 font-weight: normal;
 font-style: italic; 
 text-decoration: underline;
 margin-top: 2px;
}
.sl-markdown-content h5 {
 font-size:18px;
 font-weight: bold;
 font-style: italic; 
 text-decoration: underline;
}
.sl-markdown-content h6 {
 font-size:15px;
 font-weight: bold;
 font-style: italic; 
 text-decoration: underline;
}

.sl-markdown-content th {
 font-size:13px;
}
.sl-markdown-content td {
 font-size:13px;
}

`}</style>
        </div>
    );
};

export default IncludeStyle;
