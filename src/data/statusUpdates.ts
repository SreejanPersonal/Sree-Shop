interface StatusUpdate {
  id: string;
  date: string;
  time: string;
  message: string;
  type: 'positive' | 'negative' | 'neutral';
  models?: string[];
  apiType: 'stable' | 'beta';
}

export const statusUpdates: StatusUpdate[] = [
  // Current Status (Beta API) - Feb 14
  {
    id: 'beta-current-1',
    date: 'Feb 14',
    time: '10:00 IST',
    message: 'Provider-3/o3-mini model is currently experiencing degraded performance. Our engineering team is investigating.',
    type: 'negative',
    models: ['o3-mini'],
    apiType: 'beta'
  },
  {
    id: 'beta-current-2',
    date: 'Feb 14',
    time: '09:45 IST',
    message: 'All models are operational with optimal performance, except o3-mini which is under maintenance.',
    type: 'neutral',
    apiType: 'beta'
  },
  {
    id: 'beta-13',
    date: 'Feb 14',
    time: '09:00 IST',
    message: 'Beta API launch complete: All Provider-4 models successfully integrated and operational.',
    type: 'positive',
    models: ['DeepSeek-R1', 'DeepSeek-R1-Distill-Llama-70B', 'DeepSeekV3'],
    apiType: 'beta'
  },
  {
    id: 'beta-12',
    date: 'Feb 14',
    time: '07:30 IST',
    message: 'Provider-4/DeepSeekV3 deployment initiated.',
    type: 'neutral',
    models: ['DeepSeekV3'],
    apiType: 'beta'
  },
  {
    id: 'beta-11',
    date: 'Feb 14',
    time: '04:15 IST',
    message: 'Provider-4/DeepSeek-R1-Distill-Llama-70B integration initiated.',
    type: 'neutral',
    models: ['DeepSeek-R1-Distill-Llama-70B'],
    apiType: 'beta'
  },
  {
    id: 'beta-10',
    date: 'Feb 14',
    time: '01:30 IST',
    message: 'Provider-4/DeepSeek-R1 integration initiated. Configuring advanced features.',
    type: 'neutral',
    models: ['DeepSeek-R1'],
    apiType: 'beta'
  },

  // Stable API Updates (Professional Language)
  {
    id: 'stable-current',
    date: 'Feb 7',
    time: '00:00 IST',
    message: 'Service restoration complete: GPT-4o and Claude models have been successfully restored to full operational status.',
    type: 'positive',
    models: ['gpt-4o', 'claude'],
    apiType: 'stable'
  },
  {
    id: 'stable-1',
    date: 'Feb 6',
    time: '23:00 IST',
    message: 'Service disruption: GPT-4o and Claude models are temporarily unavailable. Our team is actively working on restoration.',
    type: 'negative',
    models: ['gpt-4o', 'claude'],
    apiType: 'stable'
  },
  {
    id: 'stable-2',
    date: 'Feb 5',
    time: '12:00 IST',
    message: 'Service restoration: Claude 3.5 has been successfully reintegrated into our production environment.',
    type: 'positive',
    models: ['claude-3.5'],
    apiType: 'stable'
  },
  {
    id: 'stable-3',
    date: 'Feb 3',
    time: '07:35 IST',
    message: 'System status update: API services restored. Note: GPT-4o experiencing intermittent instability, Claude access temporarily restricted. All other models operating at optimal capacity.',
    type: 'neutral',
    models: ['gpt-4o', 'claude'],
    apiType: 'stable'
  },
  {
    id: 'stable-4',
    date: 'Feb 1',
    time: '14:00 IST',
    message: 'Critical system alert: API services temporarily offline due to VPS migration. API key generation suspended. Engineering team investigating. Expect service interruption.',
    type: 'negative',
    apiType: 'stable'
  },
  {
    id: 'stable-5',
    date: 'Jan 31',
    time: '16:53 IST',
    message: 'Scheduled maintenance: System undergoing server migration. Expected downtime: 1 hour. Services will resume at 17:53 IST.',
    type: 'neutral',
    apiType: 'stable'
  },

  // Beta API Updates - Feb 13
  {
    id: 'beta-9',
    date: 'Feb 13',
    time: '18:45 IST',
    message: 'Provider-3/o3-mini successfully deployed and operational.',
    type: 'positive',
    models: ['o3-mini'],
    apiType: 'beta'
  },
  {
    id: 'beta-8',
    date: 'Feb 13',
    time: '15:20 IST',
    message: 'Provider-3/o3-mini integration initiated. Configuring model parameters.',
    type: 'neutral',
    models: ['o3-mini'],
    apiType: 'beta'
  },
  {
    id: 'beta-7',
    date: 'Feb 13',
    time: '12:45 IST',
    message: 'Provider-3/DeepSeek-R1 successfully integrated with enhanced capabilities.',
    type: 'positive',
    models: ['DeepSeek-R1'],
    apiType: 'beta'
  },
  {
    id: 'beta-6',
    date: 'Feb 13',
    time: '09:30 IST',
    message: 'Provider-3/DeepSeek-R1 deployment initiated. Optimizing for performance.',
    type: 'neutral',
    models: ['DeepSeek-R1'],
    apiType: 'beta'
  },

  // Beta API Updates - Feb 12
  {
    id: 'beta-5',
    date: 'Feb 12',
    time: '15:30 IST',
    message: 'Provider-2/gpt-4o integration successful. Model is now available for beta testing.',
    type: 'positive',
    models: ['gpt-4o'],
    apiType: 'beta'
  },
  {
    id: 'beta-4',
    date: 'Feb 12',
    time: '10:15 IST',
    message: 'Provider-2/gpt-4o integration initiated. Configuring model parameters.',
    type: 'neutral',
    models: ['gpt-4o'],
    apiType: 'beta'
  },

  // Beta API Updates - Feb 11 (Earliest)
  {
    id: 'beta-3',
    date: 'Feb 11',
    time: '14:45 IST',
    message: 'Provider-1/DeepSeek-R1 successfully deployed and operational.',
    type: 'positive',
    models: ['DeepSeek-R1'],
    apiType: 'beta'
  },
  {
    id: 'beta-2',
    date: 'Feb 11',
    time: '11:30 IST',
    message: 'Provider-1/DeepSeek-R1 integration initiated. Initial testing phase begins.',
    type: 'neutral',
    models: ['DeepSeek-R1'],
    apiType: 'beta'
  },
  {
    id: 'beta-1',
    date: 'Feb 11',
    time: '09:00 IST',
    message: 'Initiating Beta API development with focus on enhanced performance and expanded model support.',
    type: 'neutral',
    apiType: 'beta'
  }
];