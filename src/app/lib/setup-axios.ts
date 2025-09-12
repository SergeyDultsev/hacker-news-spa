import axios from 'axios';
import { API_CONFIG } from '@/app/config/api';

export const api = axios.create(API_CONFIG);