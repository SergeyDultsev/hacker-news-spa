import axios from 'axios';
import { API_CONFIG } from '@/app/config/axios';

export const api = axios.create(API_CONFIG);