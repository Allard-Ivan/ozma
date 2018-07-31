import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        loadChildren: './pages/homepage/homepage#HomepageModule',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: '' }
];

const config: ExtraOptions = {
    useHash: true
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule]
})
export class AppRouterModule {
}
