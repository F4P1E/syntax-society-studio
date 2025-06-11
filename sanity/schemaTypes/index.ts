// ./schemas/index.ts
import { event } from './event';
import { featured } from './featured';
import { member } from './member';
import { post } from './post';
import { submissionQueue } from './submissionQueue';
import resource from './resource';

export const schemaTypes = [
  event,
  featured,
  member,
  post,
  submissionQueue,
  resource,
];
