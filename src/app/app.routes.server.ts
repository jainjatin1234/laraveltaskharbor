import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'notes/edit/:id',
    renderMode: RenderMode.SSR // Use SSR for dynamic pages
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender // Keep Prerendering for other pages
  }
];
