"use client";

import { useState } from "react";
import Image from "next/image";
import { Flex } from "@/components/ui";
import { SendIcon, AttachmentIcon } from "@/components/icons";
import avatar1 from "@/assets/web/images/avatarImages/Avatar_Image_2.png";

interface Conversation {
	id: string;
	name: string;
	role: string;
	lastMessage: string;
	time: string;
	avatar: typeof avatar1;
}

interface Message {
	id: string;
	text: string;
	time: string;
	sender: "me" | "other";
}

const conversations: Conversation[] = [
	{
		id: "1",
		name: "BrightBuild Renovations",
		role: "Renovation Contractor",
		lastMessage: "We've reviewed your request and can...",
		time: "10:24",
		avatar: avatar1,
	},
	{
		id: "2",
		name: "RapidFlow Plumbing",
		role: "Plumbing Inspection",
		lastMessage: "Please confirm the address details.",
		time: "10:24",
		avatar: avatar1,
	},
	{
		id: "3",
		name: "BrightBuild Renovations",
		role: "Renovation Contractor",
		lastMessage: "We can reschedule the appointment f...",
		time: "10:24",
		avatar: avatar1,
	},
	{
		id: "4",
		name: "SafeGuard Security",
		role: "Security System Installation",
		lastMessage: "Your system has been successfully ins...",
		time: "10:24",
		avatar: avatar1,
	},
];

const chatMessages: Message[] = [
	{
		id: "1",
		text: "Hi, I wanted to confirm the project start date.",
		time: "10:24",
		sender: "me",
	},
	{
		id: "2",
		text: "We're planning to begin on March 25th.",
		time: "10:42",
		sender: "other",
	},
	{
		id: "3",
		text: "Great! Do you need any specific materials or do you provide everything?",
		time: "10:45",
		sender: "me",
	},
	{
		id: "4",
		text: "We provide all the main materials. Just let us know if you have any specific items in mind.",
		time: "10:50",
		sender: "other",
	},
];

export default function MessagesPage() {
	const [activeConversation, setActiveConversation] = useState("1");
	const [messageInput, setMessageInput] = useState("");

	const activeChat = conversations.find((c) => c.id === activeConversation);

	return (
		<div>
			<h1 className="text-2xl font-bold text-colors-primary mb-1">Messages</h1>
			<p className="text-sm text-gray-500 mb-6">Chat with professionals about your bookings</p>

			<div className="flex h-[calc(100vh-220px)] min-h-[500px] border border-gray-200 rounded-xl overflow-hidden bg-white">
				{/* Conversations List */}
				<div className="w-[380px] border-r border-gray-200 flex flex-col">
					<div className="p-4 border-b border-gray-200">
						<h3 className="text-base font-semibold text-colors-primary">Conversations</h3>
					</div>
					<div className="flex-1 overflow-y-auto">
						{conversations.map((conv) => (
							<button
								key={conv.id}
								onClick={() => setActiveConversation(conv.id)}
								className={`w-full text-left p-4 border-b border-gray-100 hover:bg-gray-50 transition ${
									activeConversation === conv.id ? "bg-blue-50 border-l-2 border-l-[#3E50F7]" : ""
								}`}
							>
								<Flex align="start" gap="sm">
									<Image
										src={conv.avatar}
										alt={conv.name}
										width={44}
										height={44}
										className="rounded-full shrink-0"
									/>
									<div className="flex-1 min-w-0">
										<Flex justify="between" align="center" className="mb-0.5">
											<h4 className="text-sm font-semibold text-colors-primary truncate">
												{conv.name}
											</h4>
											<span className="text-xs text-gray-400 shrink-0 ml-2">{conv.time}</span>
										</Flex>
										<p className="text-xs text-gray-500 mb-1">{conv.role}</p>
										<p className="text-sm text-gray-400 truncate">{conv.lastMessage}</p>
									</div>
								</Flex>
							</button>
						))}
					</div>
				</div>

				{/* Chat Area */}
				<div className="flex-1 flex flex-col">
					{/* Chat Header */}
					{activeChat && (
						<div className="p-4 border-b border-gray-200">
							<h3 className="text-base font-semibold text-colors-primary">{activeChat.name}</h3>
							<p className="text-xs text-gray-500">{activeChat.role}</p>
						</div>
					)}

					{/* Messages */}
					<div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
						{chatMessages.map((msg) => (
							<div
								key={msg.id}
								className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
							>
								<div
									className={`max-w-[70%] px-4 py-3 rounded-2xl ${
										msg.sender === "me"
											? "bg-[#3E50F7] text-white rounded-br-md"
											: "bg-white text-colors-primary border border-gray-200 rounded-bl-md"
									}`}
								>
									<p className="text-sm">{msg.text}</p>
									<p
										className={`text-xs mt-1 text-right ${
											msg.sender === "me" ? "text-blue-200" : "text-gray-400"
										}`}
									>
										{msg.time}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Message Input */}
					<div className="p-4 border-t border-gray-200 bg-white">
						<Flex align="center" gap="sm">
							<button className="p-2 text-gray-400 hover:text-gray-600 transition">
								<AttachmentIcon size="md" />
							</button>
							<input
								type="text"
								value={messageInput}
								onChange={(e) => setMessageInput(e.target.value)}
								placeholder="What do you need?"
								className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3E50F7]/20 focus:border-[#3E50F7]"
							/>
							<button className="px-5 py-2.5 bg-[#3E50F7] text-white rounded-lg text-sm font-medium hover:bg-[#3344D9] transition flex items-center gap-2">
								Send
								<SendIcon size="sm" className="text-white" />
							</button>
						</Flex>
					</div>
				</div>
			</div>
		</div>
	);
}
