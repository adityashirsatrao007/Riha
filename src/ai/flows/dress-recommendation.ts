// 'use server';
/**
 * @fileOverview An AI agent that recommends dresses based on user preferences.
 *
 * - dressRecommendation - A function that recommends dresses.
 * - DressRecommendationInput - The input type for the dressRecommendation function.
 * - DressRecommendationOutput - The return type for the dressRecommendation function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DressRecommendationInputSchema = z.object({
  bodyType: z.string().describe('The user\'s body type.'),
  eventTheme: z.string().describe('The theme of the event.'),
  color: z.string().describe('The preferred color of the dress.'),
});
export type DressRecommendationInput = z.infer<typeof DressRecommendationInputSchema>;

const DressRecommendationOutputSchema = z.object({
  dressRecommendations: z.array(
    z.object({
      dressName: z.string().describe('The name of the recommended dress.'),
      description: z.string().describe('A description of the recommended dress.'),
      imageUrl: z.string().describe('The URL of the dress image.'),
    })
  ).describe('A list of dress recommendations.'),
});
export type DressRecommendationOutput = z.infer<typeof DressRecommendationOutputSchema>;

export async function dressRecommendation(input: DressRecommendationInput): Promise<DressRecommendationOutput> {
  return dressRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dressRecommendationPrompt',
  input: {schema: DressRecommendationInputSchema},
  output: {schema: DressRecommendationOutputSchema},
  prompt: `You are an AI fashion consultant specializing in Indian wedding dresses. Based on the user's preferences, recommend dresses that suit their needs.

User Preferences:
Body Type: {{{bodyType}}}
Event Theme: {{{eventTheme}}}
Color: {{{color}}}

Provide a list of dress recommendations, including the dress name, description, and image URL.`,
});

const dressRecommendationFlow = ai.defineFlow(
  {
    name: 'dressRecommendationFlow',
    inputSchema: DressRecommendationInputSchema,
    outputSchema: DressRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
