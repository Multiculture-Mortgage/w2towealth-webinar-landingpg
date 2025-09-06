import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Calendar, Clock, Users, Share2 } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FriendInvite = () => {
  const [formData, setFormData] = useState({
    friendName: "",
    friendEmail: "",
    yourName: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    friendName: "",
    friendEmail: "",
    yourName: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateName = (name: string) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return "Please enter a valid email address";
    return "";
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate fields
    const friendNameError = validateName(formData.friendName);
    const friendEmailError = validateEmail(formData.friendEmail);
    const yourNameError = validateName(formData.yourName);

    const newErrors = {
      friendName: friendNameError,
      friendEmail: friendEmailError,
      yourName: yourNameError,
      message: ""
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== "");
    
    if (hasErrors) {
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Friend invite data:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData({ friendName: "", friendEmail: "", yourName: "", message: "" });
      
    } catch (error) {
      console.error("Invite error:", error);
      alert("Failed to send invite. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <section className="py-20 relative overflow-hidden">
        {/* Background elements similar to hero but more subtle */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/2 via-transparent to-brand-teal/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Success Message */}
            <div className="text-center mb-12">
              <Badge className="bg-green-500 text-white mb-6 text-sm px-4 py-2">
                ✓ REGISTRATION CONFIRMED
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight font-montserrat">
                <span className="text-brand-navy font-extrabold">You're All Set!</span>
                <br />
                <span className="text-brand-orange text-2xl md:text-3xl font-extrabold">
                  Invite a Friend & Get Bonus Content
                </span>
              </h1>
              
              <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto">
                Share this valuable opportunity with someone who could benefit from learning about 
                <strong> wealth building through real estate</strong>. You'll both get exclusive bonus materials!
              </p>

              {/* Event Reminder */}
              <div className="flex justify-center items-center space-x-8 mb-8 text-brand-navy">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-brand-orange mr-2" />
                  <span className="font-semibold">June 12th, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-brand-orange mr-2" />
                  <span className="font-semibold">90 Minutes + Q&A</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Friend Invite Form */}
              <Card className="shadow-xl border-0">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-brand-navy flex items-center justify-center">
                    <Share2 className="h-6 w-6 mr-2 text-brand-orange" />
                    Invite a Friend
                  </CardTitle>
                  <p className="text-brand-gray">
                    Help someone you care about build wealth through real estate
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="text-green-500 text-6xl mb-4">✓</div>
                      <h3 className="text-xl font-bold text-brand-navy mb-2">Invitation Sent!</h3>
                      <p className="text-brand-gray mb-4">
                        Your friend will receive an email invitation shortly.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="mt-4"
                      >
                        Invite Another Friend
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Your Name */}
                      <div>
                        <Input
                          type="text"
                          placeholder="Your Name"
                          value={formData.yourName}
                          onChange={(e) => handleInputChange('yourName', e.target.value)}
                          className={`h-12 text-base ${errors.yourName ? 'border-red-500' : ''}`}
                        />
                        {errors.yourName && (
                          <div className="flex items-center mt-1 text-red-500 text-sm">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.yourName}
                          </div>
                        )}
                      </div>

                      {/* Friend's Name */}
                      <div>
                        <Input
                          type="text"
                          placeholder="Friend's Name"
                          value={formData.friendName}
                          onChange={(e) => handleInputChange('friendName', e.target.value)}
                          className={`h-12 text-base ${errors.friendName ? 'border-red-500' : ''}`}
                        />
                        {errors.friendName && (
                          <div className="flex items-center mt-1 text-red-500 text-sm">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.friendName}
                          </div>
                        )}
                      </div>

                      {/* Friend's Email */}
                      <div>
                        <Input
                          type="email"
                          placeholder="Friend's Email Address"
                          value={formData.friendEmail}
                          onChange={(e) => handleInputChange('friendEmail', e.target.value)}
                          className={`h-12 text-base ${errors.friendEmail ? 'border-red-500' : ''}`}
                        />
                        {errors.friendEmail && (
                          <div className="flex items-center mt-1 text-red-500 text-sm">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.friendEmail}
                          </div>
                        )}
                      </div>

                      {/* Personal Message */}
                      <div>
                        <textarea
                          placeholder="Personal message (optional)"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="w-full h-24 px-3 py-2 text-base border border-input rounded-md resize-none"
                          maxLength={200}
                        />
                        <div className="text-xs text-muted-foreground mt-1">
                          {formData.message.length}/200 characters
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-12 text-lg font-bold bg-gradient-primary hover:opacity-90 transition-opacity disabled:opacity-50"
                      >
                        {isSubmitting ? "SENDING INVITATION..." : "SEND INVITATION"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Countdown Timer & Benefits */}
              <div className="space-y-8">
                <Card className="shadow-lg border-0 bg-white/50">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-brand-navy mb-4">Webinar Starts In:</h3>
                    <CountdownTimer />
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-brand-navy mb-4">Bonus for Referring Friends:</h3>
                    <ul className="space-y-3 text-brand-gray">
                      <li className="flex items-start">
                        <span className="text-brand-orange mr-2">✓</span>
                        Exclusive pre-webinar guide: "5 Steps Before Your First Investment"
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-orange mr-2">✓</span>
                        Priority access to Q&A session
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-orange mr-2">✓</span>
                        Bonus worksheet: "Property Analysis Template"
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-orange mr-2">✓</span>
                        Early notification for future events
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FriendInvite;