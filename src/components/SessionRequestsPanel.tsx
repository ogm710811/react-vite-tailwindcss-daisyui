import React from 'react';
import { Request } from '../types';

interface SessionRequestsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  requests: Request[];
}

export function SessionRequestsPanel({ isOpen, onClose, requests }: SessionRequestsPanelProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-base-100 border-l border-base-300 shadow-xl animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-base-300">
          <h3 className="font-bold text-lg">Session Requests</h3>
          <button
            onClick={onClose}
            className="btn btn-ghost btn-sm btn-circle"
          >
            ✕
          </button>
        </div>

        {requests.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-center p-8">
            <div>
              <div className="text-5xl mb-4">📈</div>
              <div className="font-semibold text-lg mb-2">No requests yet</div>
              <div className="text-sm text-base-content/60">
                Tenant requests created during this session will appear here.
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {requests.map((request) => (
              <div key={request.id} className="card bg-base-200 shadow-sm">
                <div className="card-body p-4 space-y-3">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold">{request.tenantDisplayName}</div>
                      <code className="text-xs bg-base-300 px-2 py-1 rounded">
                        {request.tenantId || 'pending assignment'}
                      </code>
                    </div>
                    <code className="text-xs bg-base-300 px-2 py-1 rounded">
                      {request.id}
                    </code>
                  </div>

                  {/* Order & Event Info */}
                  <div className="text-xs text-base-content/70">
                    Order <code className="bg-base-300 px-1 rounded">{request.orderId}</code>
                    {' • '}
                    Event <span className="capitalize">{request.eventType}</span>
                  </div>

                  {/* Products */}
                  <div className="flex flex-wrap gap-1">
                    {request.products.map((product) => (
                      <span key={product} className="badge badge-info badge-sm">
                        {product.replace('DATABOLT_', '')}
                      </span>
                    ))}
                  </div>

                  {/* Payload */}
                  <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="checkbox" />
                    <div className="collapse-title text-sm font-medium flex items-center justify-between">
                      <span>Payload</span>
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(JSON.stringify(request.payload, null, 2));
                        }}
                      >
                        📋 Copy
                      </button>
                    </div>
                    <div className="collapse-content">
                      <pre className="text-[11px] bg-base-200 p-2 rounded overflow-auto max-h-40">
                        {JSON.stringify(request.payload, null, 2)}
                      </pre>
                    </div>
                  </div>

                  {/* Response */}
                  <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="checkbox" />
                    <div className="collapse-title text-sm font-medium">
                      Response
                    </div>
                    <div className="collapse-content">
                      <pre className="text-[11px] bg-base-200 p-2 rounded overflow-auto max-h-28">
                        {JSON.stringify(request.response, null, 2)}
                      </pre>
                    </div>
                  </div>

                  {/* Timeline */}
                  {request.timeline && (
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Timeline</div>
                      <ul className="timeline timeline-vertical timeline-compact">
                        {request.timeline.map((event, idx) => (
                          <li key={idx}>
                            <div className="timeline-start text-xs">
                              {new Date(event.ts).toLocaleTimeString()}
                            </div>
                            <div className="timeline-middle">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <div className="timeline-end timeline-box text-xs">
                              {event.label}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
