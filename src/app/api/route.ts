import { DevisEmail } from "@/emails/devis";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.API_KEY);

export async function POST(request: NextRequest) {
    const data = await request.json();
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'zaam.oussama@gmail.com',
        subject: 'hello world',
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