import { isObject } from 'lodash';
import Chance from 'chance';

const FPOChars = '的是不我一有大在人了中到资要可以这个你会好为上来就学交也用能如文时没说他看提那问生过下请天们所多麽小想得之还电出工对都机自后子而讯站去心只家知国台很信成章何同道地发法无然但吗当于本现年前真最和新因果定意情点题其事方清科样些吧三此位理行作经者什谢名日正华话开实再城爱与二动比高面又车力或种像应女教分手打已次长太明己路起相主关凤间呢觉该十外凰友才民系进使她着各少全两回加将感第性球式把被老公龙程论及别给听水重体做校里常东风您湾啦见解等部原月美先管区错音否啊找网乐让通入期选较四场由书它快从欢数表怎至立内合目望认几社告更版度考喜头难光买今身许弟若算记代统处完号接言政玩师字并男计谁山张党每且结改非星连哈建放直转报活设变指气研陈试西五希取神化物王战近世受义反单死任跟便空林士台却北队功必声写平影业金档片讨色容央妳向市则员兴利强白价安呵特思叫总办保花议传元求份件持万未究决投哪喔笑猫组独级走支曾标流竹兄阿室卡马共需海口门般线语命观视朋联参格黄钱修失儿住八脑板吃另换即象料录拿专远速基帮形确候装孩备歌界除南器画诉差讲类英案带久乎掉迷量引整似耶奇制边型超识虽怪飞始品运赛费梦故班权破验眼满念造军精务留服六图收舍半读愿李底约雄课答令深票达演早卖棒够黑院假曲火准百谈胜碟术推存治离易往况晚示证段导伤调团七永刚哥甚德杀怕包列概照夜排客绝软商根九切条集千落竟越待忘尽据双供称座值消产红跑嘛园附硬云游展执闻唱育斯某技唉息苦'.split('');

/* 
Tools

A tool is anything purpose built to ease the burden of accomplishing a task by reducing the total effort required, in perpetuity.

Provide leverage

Reduce complexity

Reduce repetition

Augment our senses

Why talk about tools?

If you haven’t already, at some point in your career as a security practitioner, you will probably create a tool.

Make it work

I’d like to talk through a few concepts and considerations that may be helpful in that process.

Why Me?

I’ve been writing code for most of my life.

I’ll post a link to this presentation at the end

I like to build things.

Terminal Cornucopia

“Well that’s a pretty weird thing for someone to do”

You’re not wrong

You will likely create tools

“Just make it work”

What concepts can we introduce to improve your chances for a good outcome?

Characteristics of good tools

How these characteristics are typically applied to software

How we can better apply these characteristics to the tools in our unique industry

Assumptions

Perform as advertised

Be transparent about potential side-effects

Work consistently and dependably

Operate across an acceptable range of environments and localities

Good tools are accessible

They do not impose artificial barriers for people with disabilities.

Most operating systems offer clear guidelines and APIs to help you ensure that your software or web application will work properly with assistive technology.

Does it work with screen readers?

Does it work with alternative input devices?

Does the interface rely on the user’s ability to perceive color?

Can it be effectively used without a pointing device?

Many of these things are easy to address

Desktop

Mobile

Web

Good tools are serviceable

Things wear out and need to be replaced, upgraded, or repaired

For software, these days the bigger challenges seem to revolve around managing an active codebase

Review pull requests, field bug reports, and weigh in on new feature requests… all while maintaining the quality and integrity of your project.

Plugin systems

If you build it, they will come.

Good tools integrate well with other tools

They can accommodate the variety of different ways they are used.

The application lifecycle

The ability to be configured through the command line

It doesn’t leave a mess in your environment

Receive commands through an API in addition to a traditional text-based or graphical user interface

Delivery of output

Performs well in a chained with other tools

Provides output in a variety of industry standard formats

These qualities are critical for security tools.

As your application grows in complexity, parsing through command line options can get tedious. 

Here are some resources that will make that easier

Ruby:

JS

Python

Go

Bash

Why are we we still making command line tools in 2018?

They are widely available

They are fairly consistent across a variety of platforms

They offer a large degree of control over a system while only requiring a small amount of resources

They are easy to automate

Use an expressive language to quickly and concisely describe exactly what they want the system to do

Good tools are intuitive

Have you ever been using a complex tool or application, wanted to perform a specific action, wasn’t quite sure how to do it, and just ended up just trying what felt natural?

Ever get it right? 

How does this happen?

Invite feedback early and often from your end users

Use established user interface best practices

Create clear expectations around actions and their side-effects

How can we improve in this area?

If smartest, most helpful person you know were sitting next to someone who is unfamiliar with the application, how would they guide them through it?

Good tools reduce our cognitive load

Cognitive load is the amount of effort being used in our working memory.

Our working memory allows us to store between 4-7 small chunks of data at a time for 10-20 seconds unless we stop and intentionally process it

We can reduce a user’s cognitive load by communicating information to them in a format that requires a minimal amount of mental effort to process and understand

The command line struggles here

Large effort required to render subpar graphical information

Lack of signifiers and affordances

Flashy text and graphics? Who needs them…

Humans

Nearly 70% of the sensory receptors in your body are in your eyes.

Some designers at IBM wrote about this dilemma in greater detail: 

So, what can we do about this?

There are things out there like

Good tools are accessible

Good tools are serviceable

Good tools integrate well with other tools

Good tools are intuitive

Good tools reduce our cognitive load

Great. How can we possibly account for all these things?

Answer: Slowly and methodically

Managing application state

Here’s one strategy I use for managing state in my applications

Store

Immutable

Reducer

Action

Type

Dispatched

Here are some links for additional information on Flux and Redux

In conclusion

Thanks for your time!

If you want to revisit these slides, you will find them at:

The source is available on Github:

Find me on Twitter:

Go build some great tools!

===

Hey, my name is Evan Booth… this afternoon, I’d like to talk to you about Tools.

A tool is anything purpose built to ease the burden of accomplishing a task by reducing the total effort required, in perpetuity.
Provide leverage
Reduce complexity
Reduce repetition
Augment our senses 

Why talk about tools?
If you haven’t already, at some point in your career as a security practitioner, you will probably create a tool.
Your singular goal in this process will likely be: Make it work
Many tools that find use within the broader security community start off exactly like this.
Even if it never gets shared, we should still aim to make these tools as good as possible.
To that end, I’d like to talk through a few concepts and considerations that may be helpful in that process.

Why Me?
So, why am I talking to you about this? 
I’ve been writing code for most of my life.
I’ve been writing code in some form or fashion for most of my life. 
I’m currently doing this at currently at Counter Hack Challenges
Anyone here played NetWars or Holiday Hack Challenge?
Kringlecon.com
Oh by the way, I’ll post a link to this presentation at the end, which will include all these links, so no need to write any of this down.
So, my career has centered around software, but I also have a fairly unique relationship with physical tools as well
Fascinated by weird tools
I like to build things. More specifically, I like to build moderately complex things with limited tools and resources
Terminal Cornucopia
Hedberg
You may be thinking, “well that’s a pretty weird thing for someone to do”
You’re not wrong
Working under these constraints has helped me understand the value of good tools
Furthermore, I would make the argument that sort of thing happens all the time in the security industry
Talk through examples…
So, to reiterate: 
You will likely create tools
Your focus will probably be: “just make it work”
What concepts can we introduce to improve your chances for a good outcome?

To answer that, I’d like to share my thoughts on...
Characteristics of good tools (not just functional tools)
How these characteristics are typically applied to software
How we can better apply these characteristics to the tools in our unique industry


Before we get into this, let’s start with some assumptions:
So we can focus on the less obvious traits, let’s assume that a tool must:
Perform as advertised
Be transparent about potential side-effects
Work consistently and dependably
Operate across an acceptable range of environments and localities
Each of the characteristics I’ll mention represent a pile of books and research papers that could easily fill an olympic-sized swimming pool. I will provide links, and I’d encourage you to explore these ideas further.

Good tools are accessible
They do not impose artificial barriers for people with disabilities.
For physical tools, what this entails will vary depending on the tool’s functionality and the specific disability.
For software, however, most operating systems offer clear guidelines and APIs to help you ensure that your software or web application will work properly with assistive technology.
So you’re building a tool… here are a few considerations:
Does it work with screen readers?
Does it work with alternative input devices?
Does the interface rely on the user’s ability to perceive color?
Can it be effectively used without a pointing device?
Fortunately, many of these things are easy to address.
Links:
Desktop
https://docs.microsoft.com/en-us/windows/desktop/winauto/microsoft-active-accessibility
https://docs.fedoraproject.org/en-US/Fedora/16/html/Accessibility_Guide/index.html
https://www.debian.org/devel/debian-accessibility
https://wiki.gnome.org/Accessibility
https://developer.apple.com/accessibility/
Mobile
https://developer.apple.com/accessibility/
https://developer.android.com/guide/topics/ui/accessibility/
Web
https://www.w3.org/standards/webdesign/accessibility
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA

Good tools are serviceable
Over time, things wear out and need to be replaced, upgraded, or repaired
For software, these days the bigger challenges seem to revolve around managing an active codebase where you are expected to Review pull requests, Field bug reports, And weigh in on new feature requests… all while maintaining the quality and integrity of your project.
I think this may be an appropriate time to make a case for plugin systems. 
Think about the tools you use regularly… how many of those tools extend their core functionality through third-party plugins, extensions, and/or scripts? It may be easier to count how many don’t. 
If you search around, I’m certain you will find plugin systems for your preferred technology stack.
If you build it, they will come.

Good tools integrate well with other tools
They can accommodate the variety of different ways they are used.
For software, this characteristic shows up in two important areas:
The application lifecycle
The ability to be configured through the command line
If it terminates or runs into errors, It doesn’t leave a mess in your environment
If it is designed to run for an extended period of time, having the ability to Receive commands through an API in addition to a traditional text-based or graphical user interface
Delivery of output
Performs well in a chained with other tools
Provides output in a variety of industry standard formats
Because we spend so much time in the command line, These qualities are critical for security tools.
As your application grows in complexity, parsing through command line options can get tedious. 
Here are some resources that will make that easier:
Ruby: https://github.com/commander-rb/commander
JS: https://www.npmjs.com/package/commander
Python: https://pypi.org/project/inquirer/
Go: https://github.com/AlecAivazis/survey
Bash: https://linux.die.net/man/1/dialog

Why are we we still making command line tools in 2018?
Just in case anyone is curious why we’re still making command line tools in 2018… here are a few reasons:
They are widely available
They are fairly consistent across a variety of platforms
They offer a large degree of control over a system while only requiring a small amount of resources
They are easy to automate
When a person is up to speed on the syntax, available commands, and their respective options, that person is essentially able to  Use an expressive language to quickly and concisely describe exactly what they want the system to do

That said, working in the command line certainly has its drawbacks, which we’ll cover in these last two characteristics of good tools...

Good tools are intuitive
Have you ever been using a complex tool or application, wanted to perform a specific action, wasn’t quite sure how to do it, and just ended up just trying what felt natural?
Ever get it right? Feels pretty good.
How does this happen?
Invite feedback early and often from your end users
Use established user interface best practices
Create clear expectations around actions and their side-effects
This educates the user by promoting discovery
How can we improve in this area?
Think of the smartest, most helpful person you know. If they were sitting next to someone who is unfamiliar with the application, how would they guide them through it?

Good tools reduce our cognitive load
Cognitive load is the amount of effort being used in our working memory.
Our working memory allows us to store between 4-7 small chunks of data at a time for 10-20 seconds unless we stop and intentionally process it
We can reduce a user’s cognitive load by communicating information to them in a format that requires a minimal amount of mental effort to process and understand
Think about the effort necessary to understand a square by seeing an image of a square, versus having someone describe a square in terms of a set of four lines
The command line struggles here on a couple important fronts:
Large effort required to render subpar graphical information
Comparative Lack of signifiers and affordances
Flashy text and graphics? Who needs them…
Humans.
Nearly 70% of the sensory receptors in your body are in your eyes.
Some designers at IBM wrote about this dilemma in greater detail: https://medium.com/design-ibm/real-developers-dont-use-uis-daea7404fb4e
So, what can we do about this?
There are things out there like https://www.explainshell.com. Could we integrate something like this into our tools? Something substantially more responsive and timely than pulling up a manual page or tabbing over to a browser?

Let’s recap:
Good tools are accessible
Good tools are serviceable
Good tools integrate well with other tools
Good tools are intuitive
Good tools reduce our cognitive load

Great. How can we possibly account for all these things?
Answer: Slowly and methodically
However, even if you don’t add any of the “extra” stuff, as you tack on new features and address edge cases, you may very well find yourself dealing with a new problem: Managing application state.
I’ve seen this happen a lot. We set out to create a tool to solve a specific problem, successfully do so, but quickly end up getting overwhelmed trying to implement all the other junk that has nothing to do with the core functionality… which is the real value of the tool.
What you end up with is a bunch of unstructured spaghetti code that you don’t want to work on because you know you probably need to eventually rewrite all of it.

How do we avoid this? Here’s one strategy I use for managing state in my applications: 
It’s called Redux, and it’s a Javascript library based on an application architecture called Flux
Flux and Redux were both created by Facebook, which actively uses them on their own products
The most prominent concept in Redux is its unidirectional flow of data.
All application state resides in the Store as a single, plain object.
This Store is immutable, meaning it can’t change, it can only be replaced with a completely new object.
Each branch of the Store has a corresponding Reducer. 
Reducers are pure functions that take in two arguments: the entire state (the object in the Store), and an Action.
Actions are plain objects that must, at a minimum, have a type attribute. These Actions often describe what’s happening inside your application.
When an Action is dispatched, each Reducer function copies its corresponding piece of the application state and returns a new copy of it with modifications based on the dispatched Action. Since Reducers are pure functions, if they are called with the same Action and initial state, they will always return the same result.
All the new branches from the Reducers are then combined to form a new state object.
This new state object is then used to render your application’s view.
(show demo)
Here are some links for additional information on Flux and Redux:
https://scotch.io/tutorials/getting-to-know-flux-the-react-js-architecture
https://facebook.github.io/flux/
https://redux.js.org/
	

In conclusion
Thanks for your time!
If you want to revisit these slides, you can find them at: http://fort.ninja/hitb2018
The source is available on Github: https://github.com/treefort/hitb18
Find me on Twitter: https://twitter.com/evanbooth
Go build some great tools!


*/
const chance = new Chance();

const PresentationContent = {
  title: {
    en: `Let's Talk About Tools`,
    zh: ``,
  },
  slide2text: {
    en: `# Okay`,
    zh: ``,
  },
  slide3text: {
    en: `And finally, slide 3`,
    zh: ``,
  },
  slide4img: 'some url',
}

const wordRegEx = /\b([a-z0-9,'"]*)\b/gmi;

const adjustStringLength = len => Math.ceil(len * .4);

const generateFPO = enString => {
  return enString.replace(wordRegEx, substr => {
    if (substr.trim() === '') return '';
    const len = adjustStringLength(substr.length);
    return [...chance.pick(FPOChars, len)].join('')
  })
};

const formatContent = (text = '') => text.trim();

const getContentByLang = (contentId, lang) => {
  const translatedContent = formatContent(PresentationContent[contentId][lang]);
  if (translatedContent === 'undefined' || translatedContent === '') {
    return generateFPO(getContentByLang(contentId, 'en'));
  } 
  return translatedContent;
}

const getContentTranslations = (contentId, languages) => {
  return languages.reduce(
    (allTranslations, language) => ({
      ...allTranslations,
      [language]: getContentByLang(contentId, language),
    }), {});
};

const evalI18n = contentId => {
  const content = PresentationContent[contentId];
  return isObject(content) ? 
    getContentTranslations(contentId, Object.keys(content)) :
    content;
};

const GetContent = () => {
  return Object.keys(PresentationContent).reduce(
    (allContent, contentId) => ({
      ...allContent,
      [contentId]: evalI18n(contentId),
    }), {});
};

export default GetContent;