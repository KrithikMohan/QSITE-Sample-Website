"use client";

import React from "react";
import { siteConfig } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Mail, MessageSquare, MapPin, Send, Lock } from "lucide-react";

export function ContactFormWireframe() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact channels */}
      <div className="lg:col-span-1 space-y-4">
        <div>
          <Badge variant="purple">Direct Channels</Badge>
          <h3 className="text-xl font-bold text-white mt-2">
            Organizing Team
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Official contact points for inquiries, partnership interest, and academic collaborations.
          </p>
        </div>

        <Card variant="glass" className="p-5 space-y-4 border-white/10">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 block">General Inquiries</span>
              <span className="text-xs text-white font-mono break-all">{siteConfig.contact.email}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/20 text-purple-400 shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 block">Discord Community</span>
              <span className="text-xs text-white font-mono">{siteConfig.contact.discord}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-sky-950/40 border border-sky-500/20 text-sky-400 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 block">Location</span>
              <span className="text-xs text-white font-mono">{siteConfig.contact.location}</span>
            </div>
          </div>
        </Card>

        <div className="p-3.5 rounded-xl dashed-wireframe text-[11px] font-mono text-slate-400 flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>In-site wireframe stubs • No external redirects</span>
        </div>
      </div>

      {/* Static wireframe contact form */}
      <Card variant="glass" className="lg:col-span-2 p-6 sm:p-8 border-white/10">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
          <div>
            <h3 className="text-lg font-bold text-white">
              Send an Inquiry [Wireframe Form]
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Layout skeleton demonstrating fields for the organizer inquiry portal.
            </p>
          </div>
          <Badge variant="wireframe">Disabled Skeleton</Badge>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                disabled
                placeholder="Student / Researcher Name"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-xs text-slate-400 cursor-not-allowed select-none focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                Institutional Email
              </label>
              <input
                type="email"
                disabled
                placeholder="name@university.ca"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-xs text-slate-400 cursor-not-allowed select-none focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1.5">
              Subject Category
            </label>
            <input
              type="text"
              disabled
              placeholder="e.g. Poster Query, Sponsorship, Student Club Partnership"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-xs text-slate-400 cursor-not-allowed select-none focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1.5">
              Inquiry Message
            </label>
            <textarea
              rows={4}
              disabled
              placeholder="Inquiry text placeholder..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-xs text-slate-400 cursor-not-allowed select-none focus:outline-none resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              disabled
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl dashed-wireframe text-slate-400 font-mono text-xs cursor-not-allowed select-none flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-slate-500" />
              <span>Send Message [Disabled Preview Button]</span>
            </button>
            <span className="text-[10px] font-mono text-slate-500 text-center sm:text-right">
              Static UI wireframe only • Zero backend network requests
            </span>
          </div>
        </form>
      </Card>
    </div>
  );
}
