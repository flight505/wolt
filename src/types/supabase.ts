export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      pledges: {
        Row: {
          id: string
          name: string
          email: string
          comment: string | null
          verified: boolean
          verification_token: string
          created_at: string
          verified_at: string | null
          ip_address: string | null
          user_agent: string | null
          locale: string | null
        }
        Insert: {
          id?: string
          name: string
          email: string
          comment?: string | null
          verified?: boolean
          verification_token?: string
          created_at?: string
          verified_at?: string | null
          ip_address?: string | null
          user_agent?: string | null
          locale?: string | null
        }
        Update: {
          id?: string
          name?: string
          email?: string
          comment?: string | null
          verified?: boolean
          verification_token?: string
          created_at?: string
          verified_at?: string | null
          ip_address?: string | null
          user_agent?: string | null
          locale?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_verified_pledge_count: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      verify_pledge: {
        Args: {
          token: string
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
} 