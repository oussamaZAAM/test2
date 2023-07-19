import { DevisEmail } from "@/emails/devis";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';


export async function POST(request: NextRequest) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    try {
        const data = await request.json();
        if (process.env.EMAIL_SENDER && process.env.EMAIL_RECEIVER) {
            const mailData = await resend.emails.send({
                from: process.env.EMAIL_SENDER,
                to: process.env.EMAIL_RECEIVER,
                subject: 'Reçu de devis',
                react: DevisEmail({
                    formation: data.formation,
                    price: data.price,
                    duration: data.duration,
                    entreprise: data.entreprise,
                    fullname: data.fullname,
                    telephone: data.telephone,
                    email: data.email,
                    message: data.message,
                    date: new Date(data.date)
                }),
            });
            return NextResponse.json(mailData, { status: 200 });
        } else {
            return NextResponse.json({ message: "Les emails d'envoi et de reçu ne sont pas configurés!" }, { status: 406 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}