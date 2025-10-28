import { NextRequest, NextResponse } from 'next/server';

// POST /api/newsletter - Subscribe to newsletter
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validacija email-a
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email je obavezan' },
        { status: 400 }
      );
    }

    // Email regex validacija
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Nevažeća email adresa' },
        { status: 400 }
      );
    }

    // TODO: Ovde bi trebalo dodati:
    // 1. Čuvanje u bazu podataka (npr. MongoDB, PostgreSQL, Supabase)
    // 2. Slanje confirmation email-a (npr. preko Resend, SendGrid, Mailgun)
    // 3. Dodavanje u email marketing servis (npr. Mailchimp, ConvertKit)

    // Za sada samo logujemo (u production okruženju koristite pravu bazu)
    console.log('Newsletter subscription:', email);

    // Simulacija čuvanja u bazu
    // const subscriber = await db.newsletter.create({ email, subscribedAt: new Date() });

    // Uspešan odgovor
    return NextResponse.json(
      {
        success: true,
        message: 'Uspešno ste se prijavili na newsletter!',
        email: email
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Došlo je do greške. Pokušajte ponovo.' },
      { status: 500 }
    );
  }
}
