/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_B3f2TmsO.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Container, a as $$Layout } from './about_CeDSdTV8.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Positivus - Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"> <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8"> <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">Our Blog</h2> <p class="font-light text-gray-500 sm:text-xl">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p> </div> <div class="grid gap-8 lg:grid-cols-2"> <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md"> <div class="flex justify-between items-center mb-5 text-gray-500"> <span class="bg-lime text-black text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded"> <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
Tutorial
</span> <span class="text-sm">14 days ago</span> </div> <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900"><a href="#">How to quickly deploy a static website</a></h2> <p class="mb-5 font-light text-gray-500">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p> <div class="flex justify-between items-center"> <div class="flex items-center space-x-4"> <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar"> <span class="font-medium">
Jese Leos
</span> </div> <a href="#" class="inline-flex items-center font-medium text-black hover:text-lime">
Read more
<svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </a> </div> </article> <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md"> <div class="flex justify-between items-center mb-5 text-gray-500"> <span class="bg-lime text-black text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded"> <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
Article
</span> <span class="text-sm">14 days ago</span> </div> <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900"><a href="#">Our first project with Astro</a></h2> <p class="mb-5 font-light text-gray-500">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p> <div class="flex justify-between items-center"> <div class="flex items-center space-x-4"> <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar"> <span class="font-medium">
Bonnie Green
</span> </div> <a href="#" class="inline-flex items-center font-medium text-black hover:text-lime">
Read more
<svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </a> </div> </article> </div> </div> ` })} </main> ` })}`;
}, "/home/quinzel/Documents/localhost/positivus/src/pages/blog.astro", void 0);

const $$file = "/home/quinzel/Documents/localhost/positivus/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };