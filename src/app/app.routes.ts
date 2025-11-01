import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import {Home} from './pages/home/home'
import { About } from './pages/about/about';
import { Anime } from './pages/anime/anime';
import { VideosAnime } from './pages/videos-anime/videos-anime';

export const routes: Routes = [
    {path: '', component: Home, title: 'Geek - Web'},
    {path: 'About', component: About, title: 'About'},
    {path: 'Anime', component: Anime, title: 'Geek - Anime'},
    {path: 'VideosAnime', component: VideosAnime, title: 'Geek - videos'},
    {path: '**', redirectTo:''}
];
