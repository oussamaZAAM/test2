import ContactUsEmail from "@/emails/contactus";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const data = await request.json();
        if (process.env.EMAIL_SENDER && process.env.EMAIL_SENDER !== "" && process.env.EMAIL_RECEIVER && process.env.EMAIL_RECEIVER !== "") {
            const mailData = await resend.emails.send({
                from: process.env.EMAIL_SENDER,
                to: process.env.EMAIL_RECEIVER,
                subject: 'Contactez-nous',
                react: ContactUsEmail({
                    nom: data.nom,
                    prenom: data.prenom,
                    telephone: data.telephone,
                    email: data.email,
                    message: data.message,
                }),
            });
            return NextResponse.json(mailData, { status: 200 });
        } else {
            return NextResponse.json({ message: "Les emails d'envoi et de reçu ne sont pas configurés!" }, { status: 406 });
        }
    } catch (error: unknown) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}