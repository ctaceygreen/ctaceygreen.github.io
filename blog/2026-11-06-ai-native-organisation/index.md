---
slug: your-engineers-are-ai-native-is-your-organisation
title: Your Engineers Are AI-Native. Is Your Organisation?
description: Engineering Fundamentals in the Age of AI - Part 1 - Organising for Flow
authors: 
  - name: Chris Tacey-Green
    title: Engineer, Architect, Human
    url: https://github.com/ctaceygreen
    image_url: https://avatars.githubusercontent.com/u/11404995?v=4
image: https://christaceygreen.com/2026-11-06-ai-native-organisation/title-image.png
tags: [AI, team-topologies, engineering-fundamentals, platform-engineering, devops, leadership]
---

:::info
*Engineering Fundamentals in the Age of AI — Part 1: Organising for Flow*
:::

I've been spending a lot of time recently thinking about what an AI-native software engineering organisation should look like.

Firstly, some context. I'm all-in on AI engineering tooling. Claude Code, Codex, and the growing ecosystem of agentic development tools are incredible. The progress we've made in such a short space of time is very cool to see, and we're only scratching the surface of what's possible.

We've seen just how much these tools amplify great engineers. We're moving from engineers writing code, to engineers orchestrating multiple agents that are writing, testing, debugging and improving software autonomously. An engineer running 5-10 agents at once is happening regularly, and the amount of work that a capable engineer can get through is ridiculous.

I'm not going to spend this post convincing you of that. There are plenty of people writing about how to get the most out of Claude Code, how to structure your agents, how to optimise your harness, and which model is best at building GTA 6 this week.

What I want to talk about is something that unlocks a lot more value.

We're spending enormous amounts of time and energy making our *engineers* AI-native.

**But are we making our *organisations* AI-native?**

<!--truncate-->

Imagine you've got an engineer who can now implement a feature in a couple of hours. Sweet! Their agents have written the code, created tests, run them, fixed the failures, and everything looks good.

***Now what?***

- Perhaps the change needs to go to a separate QA team for regression testing.
- Maybe an architect needs to review it.
- Perhaps there's a release process involving another team, and we've missed this week's release window.

And when it finally reaches customers, we discover that the original requirements weren't quite right anyway, because the people building the feature weren't involved in the months of discovery that happened before it landed with engineering.

We've made writing the software incredibly fast. **The customer is still waiting weeks for something useful.**

I'm exaggerating, of course. But not by much.

Worse still, we've potentially increased the amount of work arriving at all those downstream bottlenecks. Our supercharged engineers are producing changes faster than the organisation can actually deliver them. And no I'm not talking about code review bottlenecks here, that's being discussed enough in seemingly every forum I stumble upon (maybe a topic for another day).

:::info
**Making your engineers AI-native doesn't automatically make your software delivery organisation AI-native.**
:::

And this is where a lot of organisations are going to struggle to realise the full potential of AI.

## The fundamentals haven't suddenly stopped mattering

Something I've been thinking about is how much of what we need to do to become truly AI-native is actually new.

We talk about AI as though it's requiring us to completely reinvent software engineering. And yes, there are some genuinely fundamental changes happening in how we build software.

But when you look at what an effective AI-native delivery organisation needs, you'll keep coming back to things we've been advocating for years.

- Small, empowered teams.
- Clear ownership boundaries.
- Engineers close to customers.
- Automated testing.
- Continuous Integration and Continuous Delivery.
- DevOps practices.
- Self-service platforms.
- Fast feedback loops.

We've been talking about all this stuff for ages!

But plenty of organisations haven't got these fundamentals setup yet.

The [2025 DORA research](https://dora.dev/research/2025/dora-report/) describes AI as an **amplifier** of an organisation's existing strengths and weaknesses. By now we've all seen this in real life. If you've got great engineering practices, strong teams and a delivery process optimised for flow, AI can massively amplify what you're capable of achieving.

But if your delivery process is full of handoffs, manual steps, disconnected teams and slow decision-making, AI isn't going to magically solve those problems.

**It will likely make them worse.**

This has led me to want to explore some of the engineering fundamentals that are becoming even more important as we move into the age of AI.

Not because they're new, but because the impact of getting them right, or wrong, is becoming considerably greater.

Over a series of posts, I want to get into things like DevOps, CI/CD, quality engineering, platform engineering, and how we adapt our delivery practices when engineers are working alongside a greater and greater number of autonomous agents.

But first let's start with something more fundamental.

***How should we structure our teams and organisations to get the most value from AI?***

And for me, the answer starts with Team Topologies.

## Team Topologies. Again?!

Those who've worked with me will know I'm a big fan of [Team Topologies](https://teamtopologies.com/key-concepts/), by Matthew Skelton and Manuel Pais. I've been advocating for and applying its principles for years.

If you've not come across it before, it's worth spending a little time explaining what it is, because it's pretty central to everything I'm going to talk about.

Team Topologies is an approach to organising software delivery teams around the ***fast flow of value***.

***What does that actually mean?***

Imagine a customer has a problem. Perhaps there's something frustrating about the product they're using, or a new capability that would make their life considerably easier.

How long does it take for that problem to become a working solution in their hands?

And, importantly, what's happening during that time?

Are people actually solving the problem? Or is work sitting in queues, waiting for somebody from another team to pick it up, review it, approve it or pass it somewhere else?

Team Topologies encourages us to organise teams so that they can deliver value with as little unnecessary friction as possible.

It describes four fundamental team types.

- **Stream-aligned teams** are the ones delivering value within a clearly defined business or customer domain. They should be able to understand a problem, develop a solution, deliver it and operate it, without constantly depending on other teams.
- **Enabling teams** are groups of specialists who help stream-aligned teams develop capabilities they might be missing. Perhaps a team needs to improve its testing practices, understand a new architectural approach or develop better security capabilities. An enabling team helps it become more capable, rather than permanently taking over part of its delivery process.
- **Platform teams** provide shared capabilities that other teams can consume with minimal friction. That might include deployment infrastructure, observability tooling, development environments or other services that abstract away complexity. The idea is that our stream-aligned teams can focus on the problems that matter to their customers, rather than repeatedly solving the same infrastructure and engineering challenges.
- **Complicated-subsystem teams** own parts of a system that genuinely require deep specialist expertise. Perhaps there's an unusually complex algorithm, a specialist machine learning capability or some other technical challenge that would be unreasonable for every stream-aligned team to understand.

![Diagram of an AI-native organisation: three stream-aligned pods, each with a PM and three engineers extended by agents and aligned to a customer domain, all supported by shared enabling and platform capabilities such as architecture, quality, design and UX, AI evaluation, CI/CD and observability](./ai-native-organisation.png)

**The focus is always on the stream aligned teams**, all of the other team types are in service to them in order to deliver great software to the client. Importantly, we're not wanting every specialist function to review, approve or contribute to every feature. We want those specialist capabilities to enable the stream-aligned teams to operate with as much autonomy as possible.

### It's about cognitive load, too

One of the key ideas in Team Topologies is *cognitive load*.

:::note
Essentially, how much complexity does a team need to understand and manage to do its job?
:::

There's only so much information a group of people can reasonably keep in their heads. If a team needs to understand twenty different systems, five different technologies, a load of infrastructure and several completely unrelated business domains, it's probably going to struggle.

It'll spend enormous amounts of time trying to understand how everything fits together, rather than solving problems for customers.

The aim is to draw sensible boundaries around what a team owns, then provide the expertise and shared capabilities that allow it to be epic within those boundaries.

Given those team types, Team Topologies then describes three main interaction modes:

- There's **collaboration**, where teams work closely together for a period to solve something, often because they're exploring something new or complicated.
- There's **facilitation**, where one team helps another develop a capability. For example, a quality engineering specialist working with a pod to help it adopt effective automated testing practices.
- And there's **X-as-a-Service**, where one team provides a capability that another can consume independently. Think of a deployment platform that allows a team to safely deploy its software without needing to involve the platform engineers every time.

These modes help us because **interaction has a cost**.

Collaboration can be enormously valuable, but having five teams permanently collaborating on every feature is an expensive way to achieve very little.

We should be deliberate about where collaboration is needed, where expertise should be transferred, and where a shared self-service capability would make more sense. And importantly, **Team Topologies isn't just about drawing a lovely new organisational chart**. You can rename all your teams tomorrow, but if delivering a feature still requires seven handoffs, several approval meetings and a queue of work in three other departments, you've not really achieved much. **It's the flow of work that matters.**

***So why do I think all of this has become even more important with AI?***

## Small teams, big problems

This isn't a hot take, but it's pretty clear that smaller, highly capable teams are the way to go for AI-native software delivery. Not quite to the extremes of the gurus on LinkedIn and the platform-formerly-known as Twitter, I'm not suggesting we fire half our workforce and all have single engineer product teams. My preference is a pod consisting of **a great product manager and three-ish great, product-minded engineers**.

Now, Team Topologies generally describes stable teams of around five to nine people. So yes, I'm intentionally asking whether we still need teams of that size when every engineer has access to increasingly capable AI agents.

***Why three engineers?***

Firstly, there's a minimum number of humans you want involved to ensure there's diversity of thought, healthy technical challenge, knowledge sharing, and enough resilience when somebody goes on holiday. But there's also a point where adding more engineers starts creating more coordination overhead than the additional capacity is worth. And AI is changing where that point sits.

Imagine a team of ten engineers, each orchestrating five or ten coding agents. You've potentially got an enormous amount of work being carried out simultaneously.

Sounds great!

Until you've got agents making overlapping changes to codebases, engineers trying to understand what everybody else is working on, conflicting technical decisions, and a lot of effort going into keeping everybody aligned.

**It gets messy, quickly.**

Something we've noticed with larger teams is that they naturally start dividing themselves into smaller streams of work anyway. People group together around particular features or problems because it becomes too difficult for everybody to remain involved in everything.

Of course, simply splitting a large team into smaller groups won't solve everything.

If all those teams are still constantly changing the same tightly coupled components, we've just moved the problem somewhere else. This is where the *boundaries* are still as important as they ever were.

### Own a customer problem, not a technical component

You don't want a frontend team, a backend team and a database team that all have to coordinate to deliver a feature. This gives you an organisational structure that requires handoffs for almost everything. I'm not suggesting there's no place for deep technical specialism, or that every engineering team should look the same. That's partly why Team Topologies includes complicated-subsystem teams in the first place.

But for teams responsible for delivering customer value, we want them **aligned to customer problems and product domains**.

They should have a really clearly defined space that they're responsible for. They should understand their customers, understand the problems they're facing, and be empowered to decide how best to solve them. Ideally, they're able to do all of this with very little dependency on other teams. The underlying software architecture needs to support those same boundaries. If every change needs five teams to coordinate because of how we've built the software, we're going to struggle regardless of how we've drawn our team boundaries.

But here's where AI is making a positive change.

Previously, a team owning a reasonably substantial problem space might have needed quite a few engineers with different specialist skills to deliver within it. Now, those three engineers have a huge amount of additional capability available to them through AI. They can explore unfamiliar technologies, investigate parts of the codebase they don't know particularly well, build prototypes, implement solutions and validate their work at a pace that simply wasn't possible before.

That doesn't mean they suddenly become experts in everything. Far from it. But AI can fill in enough of those gaps that a smaller team can take on a much broader range of work. Our M-shaped engineers become comb-shaped.

:::warning
Now I'd like to make it super clear we're not making teams smaller for the sake of reducing headcount. We're making them small enough to work effectively, while giving them the capabilities they need to own meaningful customer problems. It we succeed at this, we can work on more of these problems at once. **"More with the same", rather than "the same with less", please.**
:::

And it isn't a universal rule that every team must have exactly three engineers. Different problem spaces have different demands, and operational responsibilities matter too. A team running a critical service with significant out-of-hours responsibilities, for example, needs appropriate support arrangements. We shouldn't pretend that AI has magically removed the need for operational resilience. The important thing is that we're deliberately optimising the size and shape of our teams for the problem they're solving, with the new opportunity that those teams can be smaller, superpowered by AI covering their gaps.

### AI changes the cognitive load equation

There's another interesting aspect to all of this.

**AI can significantly reduce the cognitive load on engineers.**

I no longer need to personally understand every detail of an unfamiliar technology before I can make progress. I can get an agent to help explore it, explain the relevant parts, investigate the codebase and implement a solid change.

That's an enormous advantage.

**But AI also introduces new cognitive load.**

If I'm running ten agents at once, I still need to understand what they're doing, check their important decisions, review their outputs and make sure the overall solution fits together. That's assuming I'm not fully multi-agent vibe-coding ("make no mistakes").

So the goal isn't simply to give each engineer as many agents as possible and hope for the best. We need good boundaries around the work, sensible ways to coordinate parallel activity, and enough shared context that our agents aren't constantly working against one another. This is another reason why the enabling and platform team types become so important.

We want our small pods to have access to a huge range of capabilities, without expecting the engineers to become specialists in absolutely everything.

But before getting into those supporting functions, there's another aspect of the team that we haven't yet mentioned.

## Engineers need to be product people too

I've not stopped going on about this for years, and I don't plan to! **Engineers should not be sitting around waiting for a product manager to tell them what to build.**

It's a huge red flag.

I've seen delivery processes where months and months of commercial conversations, product discovery and solution discussions happened before engineering were involved.

By the time the engineers saw the work, the decisions have largely been made. They've got some requirements, perhaps some designs, and they're expected to turn those into software.

![Diagram titled "Engineers join too late": a customer problem goes through months of disconnected discovery across customer-facing, business and product teams, then handoffs and queues, before engineering joins to build, test and release, resulting in long lead time, context loss and too many handoffs](./engineers-join-too-late.png)

***Why?!***

Engineers bring such a valuable perspective to those early conversations. They understand what's technically possible, what already exists within the system, where complexity might be hiding, and often have ideas for solving problems that are considerably simpler than the original proposal.

And with AI tooling allowing us to explore those ideas so quickly, that perspective is becoming even more valuable.

**The product manager and engineering lead should be a partnership.**

Both should be involved in customer conversations. Both should understand the problems being solved. Both should be contributing to what the solution looks like.

![Diagram titled "Engineers join from the start": a cross-functional team including customer-facing, commercial, product and engineering people explores the customer problem together from day one, then moves straight into build, automated checks, release and customer feedback, giving shared context, fewer handoffs and faster feedback](./engineers-join-from-start.png)

Of course, they'll have different strengths.

- The PM will have a much deeper understanding of commercial considerations, product strategy and customer needs.
- The engineer will bring technical expertise, architectural thinking and an understanding of what's possible.

They should be challenging one another, a healthy friction.

The engineers in the pod should be just as interested in the customer problem as they are in the code they're writing. Otherwise, we've built a small team that's still operating with a product-to-engineering handoff. We've just made the handoff a little shorter.

### AI should bring discovery and delivery closer together

It's amazing to see what AI prototyping tools are doing for product managers.

They can now explore ideas visually and communicate potential solutions without needing an engineer to build something for them.

That's hugely valuable.

:::caution
There's a potential trap here. Previously, a PM might hand engineering a Jira ticket and a Figma design. They could potentially hand engineering an AI-generated prototype and say, "Build this." Have we actually improved the process? Or have we just made it easier to create a more convincing set of requirements?
:::

The way we should think about this is that those initial prototypes should be used to **explore ideas and communicate thinking**. They aren't necessarily the solution we're going to build.

This obviously has parallels with approaches like the [AI-Driven Development Lifecycle (AI-DLC)](https://aws.amazon.com/blogs/devops/ai-driven-development-life-cycle/), where product and engineering collaborate closely on understanding problems, elaborating solutions and capturing the context that agents need during construction.

:::note
There's a lot more to this than I've got space for here. We've been experimenting with our own approach to AI-DLC, including how to flow through the elaboration and construction phases with good feedback loops, and I want to dedicate a separate post to that.
:::

For now, the important thing is that **engineers are involved in discovering and shaping the solution**, rather than receiving something that's already been decided. And the whole pod retains ownership of the problem throughout delivery.

## Your agents hate your handoffs

Okay, your agents don't *hate* anything. But you get the idea.

This is one of the biggest reasons that Team Topologies has become so important. We've always known that handoffs slow software delivery, but with agentic engineering, handoffs don't just introduce waiting time. **They prevent agents from completing an otherwise automated workflow.**

Let's use QA as an example.

Imagine you've got Claude Code working on a feature. It implements the functionality, writes some automated tests, runs them, finds an issue, fixes it, and runs the tests again.

It can keep iterating through that loop, using the feedback to improve the implementation. This is one of the really powerful parts of agentic engineering. We're no longer just using AI to generate some code and then handing everything back to a human. We're allowing the agent to work through a problem, validate its own changes, discover issues and correct them.

Of course, just because an agent has written a load of tests and made them all pass doesn't mean we've built the right thing! We still need great quality engineering practices, meaningful acceptance criteria and ways of independently verifying that the software actually behaves as expected. But those checks should increasingly be available for engineers and agents to execute as part of their normal development workflow.

Now imagine that regression testing for this feature requires somebody from a separate QA team to manually execute a test suite.

***What happens to our lovely agentic feedback loop?***

**It stops.**

The agent can't complete that loop independently. We're now waiting on somebody else to perform an activity before we can determine whether the change is good enough.

![Diagram titled "Handoffs break the agent feedback loop": a traditional handoff where the agent builds, then waits for manual QA and sits in a queue, compared with an agent-compatible loop of build, test, verify and improve that runs continuously with human oversight](./agent-feedback-loops.png)

This is a handoff that we were trying to eliminate years ago anyway.

But now it's not just slowing down the engineer. It's preventing the agent from completing a much more substantial piece of work autonomously.

**The handoffs we were already optimising away with Team Topologies are now actively limiting the depth and breadth of what our agents can accomplish.**

And it's not just QA.

- What happens when an agent needs architectural guidance, but the only way to get it is to book some time with an architect?
- What if our design standards aren't represented in code, and every change needs a designer to manually check whether we've followed them?
- What if deploying software requires somebody to follow a set of manual steps in a portal?

We're constantly breaking the agent's ability to make progress.

Now, I'm not arguing that we should remove every human interaction from the process. Please don't give your coding agents unrestricted production access and tell them to crack on. At least not with anything that's holding my bank details. But there's an important distinction between **making a capability accessible to agents** and **giving those agents unrestricted authority**. For example, an agent might run security checks and verify compliance against our policies. That doesn't mean it has the authority to approve an exception to those policies.

Likewise, an agent might prepare a change, but it still must go through an automated CI/CD pipeline, with validation ensuring that only successful changes are deployed to production. The pipeline provides the appropriate checks and controls, we didn't just give an agent owner premissions on our subscription and hope for the best.

The important thing is **designing the controls around the decisions that genuinely require human judgment**, rather than forcing people into every step of the process.

If something can be automated, made self-service, or verified without a manual handoff, why aren't we doing that? This was important 10 years ago. Now our new way of working is desperate for it.

And that means rethinking how we provide the capabilities our engineering teams depend on.

## Enabling teams have a new customer

This is where our previous thinking needs to evolve. We've talked about small, stream-aligned pods, with clear ownership of customer problems. But we can't expect three engineers to be world-class experts in absolutely everything required to build great software. Architecture, quality engineering, security, scalability, observability, maintainability, design, user experience. And now increasingly, the quality and evaluation of AI features within our products.

There's an awful lot of expertise required, even for the AI-assisted legends we employ.

This is where our enabling teams come in, helping pods develop the capabilities they need without taking on unnecessary complexity. But there's a fundamental change in how these teams need to operate.

:::info
**We can no longer think about enabling just the human engineer. We need to enable the engineer and their agents together.**
:::

If an enabling function provides something that is only usable by a human, we're actively blocking our teams from working with agents in the way they want to.

Take architecture.

We've always wanted architectural standards to be properly documented. Engineers should be able to find them, understand the decisions that have been made, and apply them when building software. Now we need those standards to be available to our agents too. That might mean making them easily discoverable within the repository, through agent instructions, or through tooling that provides relevant context.

But we can take it further.

It's one thing for an agent to read a document explaining how we expect our APIs to be secured. It's another thing entirely for that agent to have access to standard implementations and tooling that help it apply those practices, and automated checks that verify the result.

There are three things we want to enable.

- **Knowledge:** Can the agent discover the standards and understand what good looks like?
- **Capabilities:** Can it access the tooling, components and workflows needed to build to those standards?
- **Verification:** Can it check that it's done things correctly, and use the feedback to fix anything that's wrong?

The third one is where your agent starts flying. Documentation is great, but agents can misunderstand things just like humans can. **Giving them a way to verify their work is a much more reliable way of ensuring quality.**

### This applies to all of our specialist functions

Take design and UX.

A great design system should have well-defined components that engineers can use to build consistent experiences. We've wanted that for years, and many companies have been building them out. Now we should be making those components available to our agents too, so they can build interfaces following our design conventions without needing a designer to guide every step. And could we provide verifiers that check accessibility standards have been fully adhered to? Of course, this doesn't remove the need for great designers. We still need people who understand user journeys, interaction design and the more subjective parts of creating a great experience.

But do we really want them spending their days correcting the same component implementation mistakes over and over again?

Or quality engineering.

We don't want QA specialists sitting at the end of the delivery process testing every feature. We want them helping our pods build great quality practices into everything they do. Automated testing frameworks, load testing strategies, reliable test environments, and tooling that both engineers and agents can use to validate their work. And we need ways of independently verifying that those tests are actually checking the right things, not simply trusting that an agent has produced a load of green ticks.

For AI products, we have another dimension of quality to consider. We need good evaluation practices, appropriate metrics and the ability to continuously understand whether the AI features we're delivering are actually performing well.

The same applies to security, infrastructure, observability and all the other specialist capabilities we need.

This isn't a significant diversion, but it requires a nice evolution in how enabling functions view their responsibilities.

**Their job isn't just to share their expertise with human engineers. It's to make that expertise available in a way that supports the entire human-agent team.**

And for some capabilities, that's going to involve building shared tooling and platforms. So we should probably talk about those...

## Please don't build a platform for everything

I've [written about paved paths before](https://christaceygreen.com/blog/paved-paths-series-part-2-a-one-pager). I'm a big believer in making the well-trodden route the easiest, safest and quickest way to reach a destination. And platform engineering is clearly an incredibly important part of making stream-aligned teams successful. A good internal platform can remove an enormous amount of complexity from our pods. Think about everything involved in deploying and running a modern application. Infrastructure, identity and permissions, networking, deployment pipelines, monitoring, secrets management, and many other things we've all smashed our brains against at 2am.

Do we really want every pod building and maintaining all of that independently?

Of course not.

A platform can provide those shared capabilities in a consistent, self-service way, leaving our engineers and agents to focus on the problems that actually differentiate our product.

But I've also seen how easy it is to get carried away building platforms. Especially now that AI makes building software much easier. You've identified a common problem across a couple of teams? Fantastic, let's build a centralised platform to solve it!

**Hold up.**

A platform isn't just something you build once and get to forget about. You've got to maintain it, support it, improve it, keep it secure, and make sure it continues to meet the needs of the teams consuming it. There's a cost attached to all of that. There's also something else that you risk by building platforms too early...

:::caution
**You might be standardising something you don't yet understand.**
:::

Remember the woodland from my paved paths posts?

We agreed that we don't want everybody cutting their own route through the forest every time they're trying to get to the same destination. That's wasteful, risky, and results in somebody getting eaten by a bear. But equally, we don't want to pave a road to the wrong destination simply because somebody thought it looked like the right direction.

Sometimes we need people exploring the woodland before we know which routes are worth paving. This applies really nicely to enabling teams. The preference should be to **start by enabling our pods to develop a capability**. Have the specialists work with them, share expertise, establish good practices and make those practices accessible to their agents.

As we do this, we'll learn where the common problems are.

- Perhaps we're repeatedly helping different pods solve the same issue.
- Perhaps they're all building very similar tooling.
- Or perhaps there's a chunk of complexity that really shouldn't be something every team needs to understand.

**Now we have a reason to consider a platform.**

### AI evaluation is a good example

We all know by now that when building AI products, we need to evaluate how well those AI features actually perform. When you first start building AI features into products, it's really difficult to know what a common evaluation platform should look like. Different product domains have different requirements. What makes a good result for one AI feature might be completely different from another. The tooling is evolving quickly, the evaluation techniques are evolving, and you're still learning what good looks like for your particular products.

***So should we immediately build a central platform and force everybody to use it?***

**No.**

Allow teams to explore these approaches within their own problem spaces first. Initially, there simply isn't enough shared understanding to know what the right common abstraction would look like. But after enough experience across different AI product domains, patterns will start to emerge. The evaluation criteria might still be specific to each product, but much of the underlying approach, tooling and practice is common. Suddenly, a shared evaluation platform starts making a lot of sense. The platform can provide the evaluation infrastructure, common tooling and established practices, and the individual pods can configure what quality means for their particular domain, while retaining responsibility for the outcome.

**You standardise the bits that are common, without taking away the team's ability to make the decisions that matter for its product.**

![Diagram titled "From enabling expertise to a platform": enable teams by sharing expertise, learn by observing repeated needs, then decide whether a platform is worth the cost; if yes, build a properly owned self-service platform for engineers and agents, if not, keep enabling. AI evaluation is shown as an example](./enable-then-platform.png)

### When should enablement become a platform capability?

I'm not suggesting that every enabling team should eventually become a platform team. They have different responsibilities, and Team Topologies is quite deliberate about that distinction. But I do think every enabling function should regularly question whether the way it's providing its expertise is still the most effective approach. Sometimes the answer will be to continue helping pods develop their own capabilities. Sometimes it'll become clear that we're repeatedly solving the same problems, and a shared capability could reduce an enormous amount of duplicated effort. The specialists in an enabling function are often ideally placed to identify those opportunities, because they've already spent time understanding where teams are struggling.

So I'd like to see these functions regularly asking themselves some questions.

- Are multiple pods solving the same problem?
- Have we learnt enough to define a shared approach without constraining teams unnecessarily?
- Would a platform genuinely reduce cognitive load and dependencies?
- And would the benefit justify the ongoing cost of maintaining it?

If the answers point towards a platform, great. Let's deliberately make that investment, with proper ownership and responsibility for maintaining it. That might involve the enabling specialists helping to establish a dedicated platform team. Or the organisation might already have a platform function that's best placed to take ownership of the new capability.

The important thing is that **we're making the decision consciously**.

We really don't want to end up with an accidental platform, where a team has built so many helpful scripts and services that the entire organisation now depends on them, but nobody's actually taken responsibility for maintaining them as a product. And importantly, when we do build these platforms, **they need to support both humans and agents**. A shiny internal developer portal might be lovely for our engineers, but it's not much use to a coding agent if all the important capabilities require somebody to click through a UI. The underlying capabilities should be available through appropriate APIs, tools and automated workflows, with sensible access controls and guardrails.

We're trying to make the paved path easy to follow for the agent as well as the engineer. Our robot friend needs to walk through that forest safely too.

## We can't ignore DevOps and CI/CD

There's something important I haven't really explored yet. We've talked a lot about how to structure teams, but the way those teams deliver and operate software is just as important. After all, it's no good having an autonomous stream-aligned pod if every change still needs to pass through a separate operations team before it can reach production.

In the age of AI, this becomes even more important, and we have new questions to answer.

- How do we handle the increased volume of changes produced by agents?
- How should CI pipelines evolve to support multiple agents working in parallel?
- What does a great automated testing strategy look like when agents can write both the implementation and the tests?
- How do we safely give agents access to deployment and operational capabilities?

There's a lot to unpack there, and rather than doing a terrible job of squeezing all of that into this post, I want to explore DevOps, CI/CD and software quality in the age of AI properly in later parts of this series. For now, the important point is that **our organisational structure needs to support end-to-end ownership, and our engineering practices need to make that ownership possible**.

One without the other isn't going to get us very far.

## How do we know whether it's working?

So we've got small, empowered teams. They're close to their customers. They have clear ownership of a problem space, and they're supported by enabling and platform functions that make it easier for both engineers and agents to deliver great software. How do we know whether any of this is actually improving things?

I'm still a big fan of [DORA metrics](https://dora.dev/guides/dora-metrics/) for understanding software delivery performance.

For anyone unfamiliar, they give us a way to understand how effectively we're delivering software. Things like how frequently we deploy, how long code changes take to reach production, how often those changes cause problems, how much rework we're creating, and how quickly we recover when deployments fail.

I'd also look at the [SPACE framework](https://doi.org/10.1145/3454122.3454124), which encourages us to think about engineering productivity more broadly, including things like developer satisfaction, collaboration, performance and flow.

And, of course, the commercial and product metrics associated with the products our teams are building.

I'm going to do a separate post about measuring software delivery, but I want to quickly talk about one metric today.

**The time from identifying a customer problem through to delivering and validating the solution.**

Not the time from a code commit to production.

The whole journey.

DORA's change lead time measures the journey from code being committed through to deployment in production. That's valuable, but I'm interested in the much bigger picture. I've actually measured this longer lead time before, and I have scars because it hasn't been particularly useful for engineers.

***Why?***

Because they had so little influence over much of it!

If months of product discovery have happened before engineering gets involved, how can we reasonably expect engineers to take care about the metric?

**They can't change what they aren't involved in.**

But now we're talking about pods that are much closer to customers, with engineers participating in discovery, challenging solutions, and owning delivery through to validation. Suddenly, that longer lead time becomes much more meaningful. We want to understand the full time from a customer problem being identified to having a validated solution, and use that metric to understand whether our overall delivery flow is improving. As with all of the previously mentioned metrics, we should always **consider the context behind the number**. A problem that requires substantial customer discovery, difficult technical decisions or significant experimentation is naturally going to take longer than a straightforward improvement.

That doesn't automatically make the team less effective.

Sometimes spending longer understanding the problem is exactly what leads to a better, simpler solution. What we want is for the pod to understand why something took as long as it did, and whether there's anything it could improve next time.

- Perhaps there were unnecessary handoffs.
- Perhaps decisions were repeatedly revisited because we didn't have the right people involved early enough.
- Perhaps our agents were getting stuck waiting for manual processes.

Or perhaps the problem was genuinely difficult, and the team spent its time doing exactly the right things. As with all of the quantitative metrics, the context behind them should be part of the same conversation. And this is why I'd look at that longer lead time alongside delivery quality, developer experience and the commercial outcomes we're aiming to achieve. This sets us up to avoid measuring whether we produce more software and instead measure whether we **solve customer problems more effectively.**

## This is just the beginning (how ominous)

I want to finish by coming back to where I started. We can see that agentic engineering is producing engineers that are able to deliver an extraordinary amount of value. But we mustn't focus solely on this part of the problem. We're talking about how many agents an engineer can run, how quickly they can implement features, and which model is currently winning the coding benchmarks.

All useful things to explore.

But if those engineers are still operating within a delivery process full of handoffs, disconnected discovery, poor feedback loops and slow decision-making, how much of that additional capability are we actually benefiting from? We've potentially made the engineering part of the process faster, while leaving the rest of it largely unchanged. And that's where a lot of our brain power should be focusing now. Thankfully, most of these topics aren't new, they're fundamental engineering practices that just need a little refresh.

- **Team Topologies** has been encouraging us to create small, empowered teams with clear ownership and minimal dependencies for years.
- **DevOps** has been encouraging us to take shared responsibility for building, deploying and operating our software.
- **CI/CD** has been encouraging us to make small changes, automate our quality checks, integrate frequently and keep our software in a state where it can be released safely.
- And good **product engineering** has been encouraging us to get engineers closer to customers and make decisions based on a genuine understanding of their problems.

These all become **more important, not less**, with AI agents working alongside our engineers.

There are still plenty of questions I'm working through.

- How small should our teams really be?
- Where's the right balance between mobbing around problems, and making small iterative changes?
- How do we manage the cognitive load of multiple agents?
- When is it worth building a platform instead of continuing to enable teams directly?

I don't think we've figured all of that out yet, and I expect the answers will keep changing as the problem evolves.

But I'm increasingly confident that the organisations getting the most value from AI aren't the ones with the fastest engineers. **They're the ones that have optimised their entire software delivery process to take advantage of that speed.**

In the next posts, I want to dig into the engineering practices that make this possible. DevOps, CI/CD, automated quality, AI evaluation and our evolving approach to AI-DLC.

If you've made it this far, thanks for reading! I'm genuinely interested in how others are approaching this, particularly those experimenting with smaller teams and agentic delivery. I'm sure there are plenty of things we haven't figured out yet.

Until next time!
