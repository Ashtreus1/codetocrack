import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from '@/components/ui/dialog';
import {
    Tooltip,
    TooltipProvider,
    TooltipTrigger,
    TooltipContent
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';

import { MessageCircleQuestion } from 'lucide-react';

export default function Mechanics(){
    return(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Dialog>
                        <DialogTrigger asChild>
                            <MessageCircleQuestion className='text-white cursor-pointer'/>
                        </DialogTrigger>
                            <DialogContent className='bg-[#1e1e1e] border-none'>
                                <DialogHeader>
                                    <DialogTitle className="text-orange-600 text-3xl font-pixelify">
                                        Mechanics
                                    </DialogTitle>
                                    <DialogDescription>
                                        Please be remind the mechanics of the game
                                    </DialogDescription>
                                </DialogHeader>
                                <ScrollArea className="h-[300px]">
                                <div>
                                    <div className="mt-4">
                                    <h3 className="text-lg font-bold text-orange-500 mb-2">Registration</h3>
                                    <ul className="list-disc pl-4 text-gray-300">
                                        <li className="mb-2">
                                        <span className="font-bold">Fee Structure:</span>
                                        <p className="text-gray-400">Fixed price of 45 pesos per team will be collected as registration fee.</p>
                                        </li>
                                        <li className="mb-2">
                                        <span className="font-bold">Team Composition:</span>
                                        <ul className="list-none pl-0">
                                            <li className="text-gray-400">Each team consists of 1-3 members</li>
                                            <li className="text-gray-400">Teams are required to choose a team name and provide details of their course and section</li>
                                        </ul>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="mt-8">
                                    <h3 className="text-lg font-bold text-orange-500 mb-2">Game Mechanics</h3>
                                    <ul className="list-disc pl-4 text-gray-300">
                                        <li className="mb-2">
                                        <span className="font-bold">Elimination Weekly Puzzle Challenges:</span>
                                        <ul className="list-none pl-0">
                                            <li className="text-gray-400">Organizers will provide a link to a set of 5 puzzles or riddles related to technology (coding, design, etc.) every week.</li>
                                            <li className="text-gray-400">Teams must solve the puzzle within the time limit to earn points.</li>
                                            <li className="text-gray-400">Points will be awarded based on puzzle solved, each puzzle worth of 2pts, and organizers will track and list team points weekly.</li>
                                        </ul>
                                        </li>
                                        <li className="mb-2">
                                        <span className="font-bold">Finals: Code2Crack Challenge</span>
                                        <ul className="list-none pl-0">
                                            <li className="text-gray-400">At the end of the 1st semester, the top teams with the highest points will qualify for the Final Code2Crack.</li>
                                            <li className="text-gray-400">The final event will take place live at a designated venue.</li>
                                        </ul>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </ScrollArea>
                            </DialogContent>
                    </Dialog>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Mechanics</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}