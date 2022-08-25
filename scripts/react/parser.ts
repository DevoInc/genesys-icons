import * as cheerio from 'cheerio';
import { ParsedElement } from './declarations';

const invalidTags = ['style'];

const filterTags = ($element: cheerio.Cheerio) =>
  !invalidTags.includes($element.prop('tagName'));

const parseElement =
  ($: cheerio.Root) =>
  ($element: cheerio.Cheerio): ParsedElement => {
    return {
      tag: $element.prop('tagName').toLowerCase(),
      attrs: $element.attr(),
      text: $element
        .clone() // clone the element
        .children() // select all the children
        .remove() // remove all the children
        .end() // again go back to selected element
        .text()
        .trim(),
      children: $element
        .children()
        .toArray()
        .map((child: cheerio.Element) => $(child))
        .filter(filterTags)
        .map(parseElement($)),
    };
  };

export async function parse(svg: string) {
  const $ = cheerio.load(svg);
  const $svg = $('svg');
  return parseElement($)($svg);
}
