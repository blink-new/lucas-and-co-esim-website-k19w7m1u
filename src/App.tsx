import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Clock, 
  MapPin, 
  Phone, 
  Globe, 
  Star, 
  ChefHat,
  Utensils,
  Heart,
  Calendar,
  Menu as MenuIcon
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './components/ui/sheet';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const hours = [
    { day: "Lundi", hours: "12:00–14:30, 19:00–22:30" },
    { day: "Mardi", hours: "12:00–14:30, 19:00–22:30" },
    { day: "Mercredi", hours: "12:00–14:30, 19:00–22:30" },
    { day: "Jeudi", hours: "12:00–14:30, 19:00–22:30" },
    { day: "Vendredi", hours: "12:00–14:30, 19:00–22:30" },
    { day: "Samedi", hours: "12:00–14:30, 19:00–22:30" },
    { day: "Dimanche", hours: "12:00–14:30" }
  ];

  const specialties = [
    {
      name: "Foie Gras de Canard",
      description: "Servi avec chutney de figues et brioche toastée",
      price: "28€",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop"
    },
    {
      name: "Coq au Vin de Moselle",
      description: "Recette traditionnelle revisitée avec légumes de saison",
      price: "26€",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop"
    },
    {
      name: "Mille-feuille Lorrain",
      description: "Aux mirabelles de Lorraine et crème pâtissière vanille",
      price: "12€",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop"
    }
  ];

  const reviews = [
    {
      name: "Marie Dubois",
      rating: 5,
      comment: "Une cuisine authentique et raffinée. L'accueil est chaleureux et le cadre magnifique. Un vrai bijou à Metz !",
      date: "Il y a 2 semaines"
    },
    {
      name: "Jean-Pierre Martin",
      rating: 5,
      comment: "Excellente adresse ! Les produits sont frais et la présentation soignée. Je recommande vivement.",
      date: "Il y a 1 mois"
    },
    {
      name: "Sophie Laurent",
      rating: 5,
      comment: "Un restaurant d'exception. Chaque plat est une découverte. Le service est impeccable.",
      date: "Il y a 3 semaines"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-stone-900">La Fleur de Lys</h1>
                <p className="text-xs text-stone-600">Restaurant • Metz</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#accueil" className="text-stone-700 hover:text-amber-600 transition-colors">Accueil</a>
              <a href="#menu" className="text-stone-700 hover:text-amber-600 transition-colors">Menu</a>
              <a href="#specialites" className="text-stone-700 hover:text-amber-600 transition-colors">Spécialités</a>
              <a href="#horaires" className="text-stone-700 hover:text-amber-600 transition-colors">Horaires</a>
              <a href="#contact" className="text-stone-700 hover:text-amber-600 transition-colors">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button className="hidden md:flex bg-amber-600 hover:bg-amber-700 text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Réserver
              </Button>
              
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="sm">
                    <MenuIcon className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <div className="flex flex-col space-y-6 mt-8">
                    <a href="#accueil" className="text-lg text-stone-700 hover:text-amber-600" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
                    <a href="#menu" className="text-lg text-stone-700 hover:text-amber-600" onClick={() => setMobileMenuOpen(false)}>Menu</a>
                    <a href="#specialites" className="text-lg text-stone-700 hover:text-amber-600" onClick={() => setMobileMenuOpen(false)}>Spécialités</a>
                    <a href="#horaires" className="text-lg text-stone-700 hover:text-amber-600" onClick={() => setMobileMenuOpen(false)}>Horaires</a>
                    <a href="#contact" className="text-lg text-stone-700 hover:text-amber-600" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Réserver
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative h-[70vh] bg-gradient-to-br from-amber-50 to-stone-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              <Heart className="w-3 h-3 mr-1" />
              Cuisine Traditionnelle Française
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              La Fleur de Lys
            </h1>
            
            <p className="text-xl text-stone-700 mb-8 leading-relaxed">
              Découvrez l'art de la gastronomie française au cœur de Metz. 
              Une expérience culinaire authentique dans un cadre raffiné et chaleureux.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                <Calendar className="w-5 h-5 mr-2" />
                Réserver une table
              </Button>
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-3">
                <Globe className="w-5 h-5 mr-2" />
                Voir le menu
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 mt-8 text-sm text-stone-600">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-amber-600" />
                5 Rue des Piques, Metz
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1 text-amber-600" />
                03 87 74 01 23
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="specialites" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              <ChefHat className="w-3 h-3 mr-1" />
              Nos Spécialités
            </Badge>
            <h2 className="text-4xl font-bold text-stone-900 mb-4">
              Saveurs d'Exception
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Découvrez nos créations culinaires, inspirées de la tradition française 
              et sublimées par la créativité de notre chef.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specialties.map((dish, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-stone-200 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-amber-700 font-semibold">
                      {dish.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-stone-900">{dish.name}</CardTitle>
                  <CardDescription className="text-stone-600">
                    {dish.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8"
              onClick={() => window.open('https://lafleuredely.fr', '_blank')}
            >
              <Utensils className="w-4 h-4 mr-2" />
              Découvrir notre menu complet
            </Button>
          </div>
        </div>
      </section>

      {/* Hours & Contact */}
      <section id="horaires" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Hours */}
            <Card className="border-stone-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-stone-900">Horaires d'ouverture</CardTitle>
                    <CardDescription>Nous vous accueillons</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-stone-100 last:border-b-0">
                      <span className="font-medium text-stone-900">{schedule.day}</span>
                      <span className="text-stone-600 text-sm">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-stone-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-stone-900">Nous contacter</CardTitle>
                    <CardDescription>Informations pratiques</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-stone-900">Adresse</p>
                      <p className="text-stone-600">5 Rue des Piques<br />57000 Metz</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-stone-900">Téléphone</p>
                      <a href="tel:0387740123" className="text-amber-600 hover:text-amber-700">
                        03 87 74 01 23
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-stone-900">Menu en ligne</p>
                      <a 
                        href="https://lafleuredely.fr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700"
                      >
                        lafleuredely.fr
                      </a>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Réserver maintenant
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              <Star className="w-3 h-3 mr-1" />
              Avis Clients
            </Badge>
            <h2 className="text-4xl font-bold text-stone-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients qui ont vécu une expérience mémorable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-stone-200">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-700 font-semibold text-sm">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900">{review.name}</h4>
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 italic mb-3">"{review.comment}"</p>
                  <p className="text-sm text-stone-500">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Vivez une expérience gastronomique unique
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Réservez votre table dès maintenant et laissez-vous surprendre par notre cuisine d'exception.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50 px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Appelez-nous
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-700 px-8 py-3">
              <MapPin className="w-5 h-5 mr-2" />
              Nous trouver
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                  <ChefHat className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">La Fleur de Lys</span>
              </div>
              <p className="text-stone-400">
                Restaurant gastronomique français au cœur de Metz, 
                proposant une cuisine authentique et raffinée.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-stone-400">
                <p>5 Rue des Piques<br />57000 Metz</p>
                <p>Tél : 03 87 74 01 23</p>
                <p>Menu : lafleuredely.fr</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Horaires</h4>
              <div className="space-y-1 text-stone-400 text-sm">
                <p>Lun-Sam : 12h00-14h30, 19h00-22h30</p>
                <p>Dimanche : 12h00-14h30</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400">
            <p>&copy; 2024 La Fleur de Lys. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;