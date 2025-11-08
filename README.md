# emma-three.js

## Introduction

Emma (Extensible MultiMedia Architecture) is a file format for representing 3D applications: scene graph, code and user interaction. It is translated into Javascript code that runs inside a three.js runtime environment inside a web browser. Emma is extensible, meaning you can write new nodes and include them in your application. And it is multimedia since you can include audio, video and other media types in your applications.

This repository has all the documentation descibing what Emma is and now to use it to build applications. It also has the application that converts Emma into Javascript.

## History

Emma3D was a project I worked on in 2005-2006 with long time collaborators Rob Myers, Murat Aktihanoglu and Rick Pasetto. The work was done at Many One Networks and if you want a good read full of intrigue and folly, If you want a good read (and perhaps get lost down a rabbit hole) I invite you to look up Joe Firmage. He was quite a character with a checkered past who had a dream in 2005 to create a "Galactic Encyclopedia" and we were tasked to create a 3D user interface to this work. I was enamoured with the idea of a scene graph file format, mostly because of my work on VRML and follow-on projects. We felt we could make a powerful and versatile format with embedded code to create complete applications within this environment. We landed on a format similar to that of VRML using Lua as the programming environment. All this made sense back in 2005.

Many One imploded under the guidance of Joe, which anyone with 2 brain cells to rub together could have told you. But it was great fun and I still to this day believe we came up with some very interesting concepts. Fast forward to today and the world has changed. Back then getting 3D running on any machine took a lot of finesse, but today the Web is king. I got involved with creating the WebGL standard which is still a leading driver of 3D on the web and Javascript is the language of choice for anything on the web. So I got to thinking that there is value is marrying the ideas behind the Emma file format with modern Web and 3D technologies.

## The Emma File Format

Emma is an outgrowth of the VRML and X3D formats. It looks more like the former than the latter, which is XML based. XML has a lot of advantages in tools that allow you to edit and process the files. But I find it much too arcane to be readable, and readability was one of my goals. But in developing Emma back in 2005 we did create an XML variant so it would be easy to revive that.

### Prototypes

A prototype (PROTO) adds a new node type to the system. You add fields for input and output, nodes for functionality and code for processing. Here's an example:

PROTO Spinner [
field SFFloat speed 1
field MFNode children [ ]
DEF G Group { children FROM TOP.children }
Timer {
loop true
interval FROM TOP.rate
fraction DO {
TOP.S.rotation =
{ 0,1,0,Math.PI*2*self.fraction }
}
]
PROTO Box “protos@Box.ema”
Spinner { children Box { size 1 2 3 } }

 

 ## Learn More

 As I said, Emma started way back in 2005. All the work done back then is available in the Emma3D GitHub repository. I've included a cleaned up version of the white paper we wrote back then in this repo. You can view it at Emma White Paper.

