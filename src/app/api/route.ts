import { DevisEmail } from "@/emails/devis";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';


export async function POST(request: NextRequest) {
    const resend = new Resend(process.env.API_KEY);
    
    const data = await request.json();
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'zaam.oussama@gmail.com',
        subject: 'Reçu de devis',
        react: DevisEmail({
            formation: data.formation,
            entreprise: data.entreprise,
            fullname: data.fullname,
            telephone: data.telephone,
            email: data.email,
            message: data.message,
            date: new Date(data.date)
        }),
    });

    return NextResponse.json({ status: "200" });
}