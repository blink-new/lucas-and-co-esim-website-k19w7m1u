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

  Calendar,
  Menu as MenuIcon,
  Award,
  Users,
  Sparkles
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
      description: "Servi avec chutney de figues et brioche toastée, accompagné d'un confit d'oignons doux",
      price: "28€",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
      category: "Entrée"
    },
    {
      name: "Coq au Vin de Moselle",
      description: "Recette traditionnelle revisitée avec légumes de saison et purée de pommes de terre truffée",
      price: "26€",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      category: "Plat"
    },
    {
      name: "Mille-feuille Lorrain",
      description: "Aux mirabelles de Lorraine et crème pâtissière vanille, coulis de fruits rouges",
      price: "12€",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
      category: "Dessert"
    }
  ];

  const reviews = [
    {
      name: "Marie Dubois",
      rating: 5,
      comment: "Une cuisine authentique et raffinée. L'accueil est chaleureux et le cadre magnifique. Un vrai bijou à Metz !",
      date: "Il y a 2 semaines",
      avatar: "MD"
    },
    {
      name: "Jean-Pierre Martin",
      rating: 5,
      comment: "Excellente adresse ! Les produits sont frais et la présentation soignée. Je recommande vivement.",
      date: "Il y a 1 mois",
      avatar: "JP"
    },
    {
      name: "Sophie Laurent",
      rating: 5,
      comment: "Un restaurant d'exception. Chaque plat est une découverte. Le service est impeccable.",
      date: "Il y a 3 semaines",
      avatar: "SL"
    }
  ];

  const stats = [
    { number: "15+", label: "Années d'Excellence", icon: Award },
    { number: "500+", label: "Clients Satisfaits", icon: Users },
    { number: "4.9", label: "Note Moyenne", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg">
                <ChefHat className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-semibold text-slate-900">La Fleur de Lys</h1>
                <p className="text-sm text-slate-600 font-medium">Restaurant Gastronomique • Metz</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#accueil" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Accueil</a>
              <a href="#specialites" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Spécialités</a>
              <a href="#horaires" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Horaires</a>
              <a href="#avis" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Avis</a>
              <a href="#contact" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button className="hidden lg:flex bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6">
                <Calendar className="w-4 h-4 mr-2" />
                Réserver
              </Button>
              
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="sm" className="p-2">
                    <MenuIcon className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-white">
                  <div className="flex flex-col space-y-8 mt-12">
                    <a href="#accueil" className="text-xl text-slate-700 hover:text-emerald-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
                    <a href="#specialites" className="text-xl text-slate-700 hover:text-emerald-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Spécialités</a>
                    <a href="#horaires" className="text-xl text-slate-700 hover:text-emerald-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Horaires</a>
                    <a href="#avis" className="text-xl text-slate-700 hover:text-emerald-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Avis</a>
                    <a href="#contact" className="text-xl text-slate-700 hover:text-emerald-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full mt-8">
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
      <section id="accueil" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&h=900&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        {/* Floating decoration */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-br from-emerald-100/30 to-emerald-200/30 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-6 py-20 flex items-center min-h-screen">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Cuisine Traditionnelle Française d'Exception
            </Badge>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 mb-8 leading-none">
              La Fleur
              <span className="block text-emerald-600">de Lys</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed max-w-2xl font-light">
              Découvrez l'art de la gastronomie française au cœur de Metz. 
              Une expérience culinaire authentique dans un cadre raffiné et chaleureux, 
              où tradition et créativité se rencontrent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-4 text-lg">
                <Calendar className="w-5 h-5 mr-3" />
                Réserver une table
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 px-10 py-4 text-lg"
                onClick={() => window.open('https://lafleuredely.fr', '_blank')}
              >
                <Globe className="w-5 h-5 mr-3" />
                Voir le menu
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-600">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
                <span className="font-medium">5 Rue des Piques, 57000 Metz</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-emerald-600" />
                <a href="tel:0387740123" className="font-medium hover:text-emerald-600 transition-colors">
                  03 87 74 01 23
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2 font-serif">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="specialites" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-2">
              <ChefHat className="w-4 h-4 mr-2" />
              Nos Créations Signature
            </Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
              Saveurs d'Exception
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos créations culinaires, inspirées de la tradition française 
              et sublimées par la créativité et la passion de notre chef étoilé.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {specialties.map((dish, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/95 text-emerald-700 font-semibold shadow-lg">
                      {dish.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-emerald-600 text-white font-bold text-lg px-3 py-1 shadow-lg">
                      {dish.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-2xl font-serif text-slate-900 mb-3">{dish.name}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed text-base">
                    {dish.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-4 text-lg"
              onClick={() => window.open('https://lafleuredely.fr', '_blank')}
            >
              <Utensils className="w-5 h-5 mr-3" />
              Découvrir notre menu complet
            </Button>
          </div>
        </div>
      </section>

      {/* Hours & Contact */}
      <section id="horaires" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Informations Pratiques
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Toutes les informations pour nous rendre visite et nous contacter
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Hours */}
            <Card className="border-0 shadow-xl bg-white overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-serif text-white">Horaires d'ouverture</CardTitle>
                    <CardDescription className="text-emerald-100">Nous vous accueillons</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-b-0">
                      <span className="font-semibold text-slate-900 text-lg">{schedule.day}</span>
                      <span className="text-slate-600 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-0 shadow-xl bg-white overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-serif text-white">Nous contacter</CardTitle>
                    <CardDescription className="text-slate-300">Informations pratiques</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 text-lg mb-1">Adresse</p>
                      <p className="text-slate-600">5 Rue des Piques<br />57000 Metz, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 text-lg mb-1">Téléphone</p>
                      <a href="tel:0387740123" className="text-emerald-600 hover:text-emerald-700 text-lg font-medium">
                        03 87 74 01 23
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Globe className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 text-lg mb-1">Menu en ligne</p>
                      <a 
                        href="https://lafleuredely.fr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 text-lg font-medium"
                      >
                        lafleuredely.fr
                      </a>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className="w-5 h-5 mr-3" />
                  Réserver maintenant
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="avis" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Témoignages Clients
            </Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez les témoignages de nos clients qui ont vécu une expérience gastronomique mémorable dans notre établissement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {review.avatar}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 text-lg">{review.name}</h4>
                      <div className="flex space-x-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-slate-600 italic leading-relaxed text-lg mb-4">"{review.comment}"</p>
                  <p className="text-sm text-slate-500 font-medium">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&h=600&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Vivez une expérience 
            <span className="block">gastronomique unique</span>
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Réservez votre table dès maintenant et laissez-vous surprendre par notre cuisine d'exception 
            dans un cadre chaleureux et raffiné.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-3" />
              03 87 74 01 23
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-4 text-lg font-semibold">
              <MapPin className="w-5 h-5 mr-3" />
              5 Rue des Piques, Metz
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center">
                  <ChefHat className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-serif font-bold">La Fleur de Lys</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Restaurant gastronomique français au cœur de Metz, 
                proposant une cuisine authentique et raffinée depuis plus de 15 ans.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-white">Contact</h4>
              <div className="space-y-3 text-slate-400">
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-emerald-400" />
                  5 Rue des Piques, 57000 Metz
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-emerald-400" />
                  03 87 74 01 23
                </p>
                <p className="flex items-center">
                  <Globe className="w-5 h-5 mr-3 text-emerald-400" />
                  lafleuredely.fr
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-white">Horaires</h4>
              <div className="space-y-2 text-slate-400">
                <p className="font-medium">Lundi - Samedi</p>
                <p>12h00-14h30 • 19h00-22h30</p>
                <p className="font-medium mt-4">Dimanche</p>
                <p>12h00-14h30</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 La Fleur de Lys. Tous droits réservés. • Design moderne & raffiné</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;