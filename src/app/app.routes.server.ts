import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'notes/edit/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Fetch or define IDs for prerendering
      return [{ id: '1' }, { id: '2' }, { id: '3' }]; // Example IDs
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender // Keep Prerendering for other pages,
    
  }
];
