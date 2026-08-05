import { BookPageNavigation } from '../types';
import { ALL_RECIPES } from './recipesData';
import { PAGE_CONTENTS } from './bookContent';

// Base introductory pages (Pages 5 "Como Utilizar" and 6 "Organização" removed as requested)
export const BASE_NAV_PAGES: BookPageNavigation[] = [
  { id: 'page-1', pageNumber: 1, title: 'Capa Elegante', type: 'cover' },
  { id: 'page-2', pageNumber: 2, title: 'Direitos Autorais e Isenção', type: 'copyright' },
  { id: 'page-3', pageNumber: 3, title: 'Apresentação da Mestra Lin', type: 'presentation' },
  { id: 'page-4', pageNumber: 4, title: 'Uma Mensagem da Mestra Lin', type: 'message' },
  { id: 'page-5', pageNumber: 5, title: 'O que é a Medicina Chinesa', type: 'mtc-explanation' },
  { id: 'page-6', pageNumber: 6, title: 'Ingredientes Mais Utilizados', type: 'ingredients-guide' },
  { id: 'page-7', pageNumber: 7, title: 'Como Aproveitar Melhor', type: 'best-practices' },
  { id: 'page-8', pageNumber: 8, title: 'Sumário Completo', type: 'table-of-contents' }
];

// Build complete list of pages including Chapter Hub pages and Recipe pages
const pages: BookPageNavigation[] = [...BASE_NAV_PAGES];

// 10 Chapters
PAGE_CONTENTS.page10_tableOfContents.chapters.forEach((chap) => {
  // Add Chapter Hub page
  pages.push({
    id: `chapter-${chap.id}`,
    pageNumber: pages.length + 1,
    title: `Capítulo ${chap.id}: ${chap.name}`,
    type: 'chapter-intro',
    chapterId: chap.id
  });

  // Add 10 recipes for this chapter
  const chapterRecipes = ALL_RECIPES.filter(r => r.chapterId === chap.id);
  chapterRecipes.forEach((recipe) => {
    pages.push({
      id: `recipe-${recipe.id}`,
      pageNumber: pages.length + 1,
      title: `${recipe.id}. ${recipe.title}`,
      type: 'recipe',
      chapterId: recipe.chapterId,
      recipeId: recipe.id
    });
  });
});

export const ALL_BOOK_PAGES: BookPageNavigation[] = pages;
